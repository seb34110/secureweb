// Librairie
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  // Variables
  const { prenom, nom, email, contenu } = req.body;

  if (!prenom || !nom || !email || !contenu) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }

  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    res.status(400).send({
      message: "EMAIL_SYNTAX_INCORRECT",
    });
    return;
  }

  // Transformer les retours à la ligne pour le HTML
  const message = contenu
    .replace(/\n/g, "<br>")
    .replace(/\r/g, "<br>")
    .replace(/\t/g, "<br>")
    .replace(/<(?!br\s*\/?)[^>]+>/g, "");

  // Donner la clé API
  const sendGridApiKey = process.env.KEY_SENDGRID;

  if (!sendGridApiKey) {
    // Gérer le cas où la clé API est manquante
    console.error("Clé API SendGrid manquante.");
    res.status(500).json({
      message: "ERREUR PARAMÉTRAGE CLÉ API SENDGRID",
    });
    return;
  }

  sgMail.setApiKey(sendGridApiKey);

  // Création du message
  const sendGridMail = {
    to: "sebastienwendling@orange.fr",
    from: "sebastienwendling@orange.fr",
    templateId: "d-ece79ca715dc48f3a586580859e04143",
    dynamic_template_data: {
      prenom: prenom,
      nom: nom,
      email: email,
      contenu: message,
    },
  };
  // SendGrid
  (async () => {
    try {
      await sgMail.send(sendGridMail);
      res.status(200).json({
        message: "EMAIL_SENDED_SUCCESSFULLY",
      });
    } catch {
      res.status(500).json({
        message: "ERROR_WITH_SENDGRID",
      });
      return;
    }
  })();
}
