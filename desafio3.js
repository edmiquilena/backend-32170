import twilio from "twilio";
import * as dotenv from "dotenv";
dotenv.config();
const accountSID = "AC43e3382af884116c9399623c6ee07006";
const authToken = process.env.TWILIO;
const sendingPhone = "+14582434892";
const client = twilio(accountSID, authToken);
const params = process.argv;
const phoneNumber = params[2] == "NO" ? process.env.PHONE : params[2];
const body = params[3];

try {
  // ? Aca en Argentina, los móviles son 54911 y los fijos 5411
  // ? Pero twilio se ve que no le importa eso, y hay que mandarlo 5411 al movil
  await client.messages.create({
    body: body,
    from: sendingPhone,
    to: phoneNumber,
  });
  console.log("enviado!");
} catch (e) {
  console.error(e);
}
