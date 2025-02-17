import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = parseInt(process.env.PORT, 10);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: "Le serveur fonctionne correctement." });
});

app.post('/send-email', async (req, res) => {
    const { user, type, title } = req.body;

    try {
        await transporter.sendMail({
            from: 'PleXiglass',
            to: "aatole.capelle@gmail.com",
            subject: `New Plex request from ${user}`,
            html: `
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Plexiglass - Nouvelle demande</title>
    <style type="text/css">
      body {
        background-color: #f4f4f4;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
      a {
        color: #ffffff;
      }
      .container {
        background-color: #ffffff;
        margin: auto;
        padding: 20px;
        max-width: 600px;
        border: 1px solid #dddddd;
      }
      h1 {
        font-family: Popins, sans-serif;
        
      }
      span {
        color: #ECB000;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        color: #666666;
      }
      .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #999999;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Ple<span>X</span>iglass</h1>
      <p>Nouvelle demande de <strong>${user}</strong> pour ${type==="film" ? "un" : "une"} <strong>${type}</strong><br>Titre: <strong>${title}</strong></p>
      <div class="footer">
        &copy; PleXiglass - Made by <a href="https://github.com/Anatoleee">Anatolee</a>
      </div>
    </div>
  </body>
</html>`,
        });
        res.status(200).json({ message: 'Demande envoyée avec succès !' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de la demande' });
    }
});

app.listen(port, () => {
    console.log('Ecoute sur le port XXX');
});