const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

require("dotenv").config();

// POST-route för att hantera formulärdata
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Alla fält måste fyllas i.");
  }

  try {
    // Nodemailer-konfiguration
    const transporter = nodemailer.createTransport({
      host: "mailcluster.loopia.se", // Loopias SMTP-server
      port: 587, // Port för TLS
      secure: false, // Använd `false` för TLS (port 587)
      auth: {
        user: process.env.EMAIL_USER, // Läs från miljövariabler
        pass: process.env.EMAIL_PASS, // Läs från miljövariabler
      },
    });

    // E-postens innehåll
    const mailOptions = {
      from: email,
      to: "info@entercode.se", // Mottagarens e-postadress
      subject: `Kontaktförfrågan från ${name}`,
      text: `Du har fått ett nytt meddelande från ${name} (${email}):\n\n${message}`,
    };

    // Skicka e-post
    await transporter.sendMail(mailOptions);

    res.status(200).send("E-post skickad!");
  } catch (error) {
    console.error("Ett fel inträffade:", error);
    res.status(500).send("Något gick fel vid e-posthanteringen.");
  }
});

// Starta servern
const PORT = 4000; // Ändra till en annan ledig port
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
