const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Lista över tillåtna origins
const allowedOrigins = [
  "http://localhost:3000", // Lokal utveckling
  "https://entercode-production.up.railway.app", // Produktions-URL för frontend
];

// Middleware för JSON och CORS
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Ej tillåtet ursprung"));
      }
    },
  })
);

// API Endpoint
app.post("/api/kontakt", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Alla fält måste fyllas i." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "mailcluster.loopia.se",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verifiera SMTP-konfiguration
    transporter.verify((error) => {
      if (error) {
        console.log("SMTP-fel:", error);
      } else {
        console.log("SMTP-anslutning fungerade!");
      }
    });

    // E-postkonfiguration
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

// Starta servern
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
