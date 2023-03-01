import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();
const accountSID = "AC43e3382af884116c9399623c6ee07006";
const authToken = process.env.TWILIO;
const sendingPhone = "+14155238886";
const client = twilio(accountSID, authToken);
// * => +(COUNTRY CODE) XXXXXXXXXXXXX
try {
  // ? Aca en Argentina, los móviles son 54911 y los fijos 5411
  // ? Pero twilio se ve que no le importa eso, y hay que mandarlo 5411 al movil
  await client.messages.create({
    body: "Coder: Tu codigo es 45534. No lo compartas con nadie!",
    from: `whatsapp:${sendingPhone}`,
    to: `whatsapp:${process.env.PHONE}`,
    mediaUrl: [""],
  });
  console.log("enviado!");
} catch (e) {
  console.error(e);
}
