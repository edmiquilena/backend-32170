import { createTransport } from "nodemailer";
async function run({ subject, html, email }) {
  const transporter = createTransport({
    // host: "smtp.ethereal.email",
    service: "gmail",
    port: 587,
    auth: {
      // * => 'micorreo@gmail.com'
      user: "kole50@ethereal.email",
      // * => 3rd party password
      pass: "K6BbXFA99k8WATDYAY",
    },
  });
  const opts = {
    from: "kole50@ethereal.email",
    to: email,
    subject,
    html,
  };

  const info = await transporter.sendMail(opts);
  console.log(info);
  return info;
}
// * 0 1 -> 2 3
const params = process.argv;
const subject = params[2] || "titulo";
const html = params[3] || "<b>Hola mundo!</b>";
const res = await run({
  subject,
  html,
  email: "jerel.oconnell12@ethereal.email",
});
console.log(res);
