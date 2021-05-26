import Mailgun from "mailgun-js";
import { NextApiRequest, NextApiResponse } from 'next';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxaa7aa2c70c0148a394518440826b40f6.mailgun.org",
});


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, fullname, message, available } = req.body
  const msg = {
    to: 'ialimson@gmail.com',
    from: email,
    subject: available,
    text: `${fullname} \n ${message}`,
  };

  try {
    await mailGunClient.messages().send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}