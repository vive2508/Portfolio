import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `krisanth@example.com`, // Replace with your actual email
      subject: `${name} From Contact Form.`,
      reply_to: `${SenderEmail}`,
      text: `sender email: ${SenderEmail} 
       ${message}`,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    // You can handle the error here, maybe show a toast or redirect to an error page
  }

return redirect('/')
 
  
};
