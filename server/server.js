const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// POST-route för att hantera formulärdata
app.post("/api/kontakt", async (req, res) => {
  const { name, email, message } = req.body;

  // Validera att alla fält är ifyllda
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
        user: process.env.EMAIL_USER, // Din e-postadress
        pass: process.env.EMAIL_PASS, // Ditt lösenord
      },
    });

    // Konfigurera e-postinnehåll
    const mailOptions = {
      from: process.env.EMAIL_USER, // E-postadressen som matchar SMTP-användaren
      replyTo: email, // Gör att mottagaren kan svara till användaren
      to: "info@entercode.se", // Mottagarens e-postadress
      subject: `Kontaktförfrågan från ${name}`,
      text: `Meddelande från ${name} (${email}):\n\n${message}`,
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
const PORT = 4000; // Backend körs på port 4000
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
