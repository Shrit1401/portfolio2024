import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const sendEmail = await resend.emails.send({
      from: "Shrit <coolspace@shrit.in>",
      to: [email],
      subject: "Hello World - Shrit",
      react: EmailTemplate(),
    });

    const addContact = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if (!sendEmail || !addContact) {
      return NextResponse.json(
        {
          sendEmail,
          addContact,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      sendEmail,
      addContact,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
