const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Lista över tillåtna ursprung (CORS-konfiguration)
const allowedOrigins = [
  "http://localhost:3000", // Lokal utveckling
  "https://entercode.se", // Produktions-URL
  "https://entercode-production.up.railway.app", // Railway
];

// Middleware för att hantera JSON och CORS
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Ej tillåtet ursprung"));
      }
    },
  })
);

// API Endpoint för att hantera kontaktformulär
app.post("/api/kontakt", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Alla fält måste fyllas i." });
  }

  try {
    // Skapa en transporter för Nodemailer
    const transporter = nodemailer.createTransport({
      host: "mailcluster.loopia.se", // Din SMTP-server
      port: 587, // Port för e-posttjänsten
      secure: false, // Använd `true` för port 465, annars `false`
      auth: {
        user: process.env.EMAIL_USER, // Från .env
        pass: process.env.EMAIL_PASS, // Från .env
      },
    });

    // Verifiera SMTP-konfiguration
    await transporter.verify();

    // Konfiguration för e-post
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "info@entercode.se",
      subject: `Kontaktförfrågan från ${name}`,
      text: `Meddelande från ${name} (${email}):\n\n${message}`,
    };

    // Skicka e-post
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-post skickad!" });
  } catch (error) {
    console.error("E-postfel:", error.message);
    res
      .status(500)
      .json({ error: "E-post skickades inte.", details: error.message });
  }
});

// Felhanterings-middleware (ska vara sist)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Ett internt serverfel inträffade." });
});

// Starta servern på rätt port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
