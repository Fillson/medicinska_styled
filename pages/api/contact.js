import nodemailer from "nodemailer";
import "dotenv";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, surname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "Hitta vart den är hostad",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: "kontaktformular@mforebro.se",
      to: "info@mforebro.se",
      subject: `Meddelande från ${name} ${surname}`,
      html: `
        <p>Från ${name} ${surname} ${email}</p>
        <div>${message}</div>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
