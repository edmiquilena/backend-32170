import { createTransport } from "nodemailer";
async function run() {
  const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kole50@ethereal.email",
      pass: "K6BbXFA99k8WATDYAY",
    },
  });
  const opts = {
    from: "kole50@ethereal.email",
    to: "jerel.oconnell12@ethereal.email",
    subject: "Hola coder!",
    html: `<b>Hola mundo!</b>`,
  };

  const info = await transporter.sendMail(opts);
  console.log(info);
}

run();
