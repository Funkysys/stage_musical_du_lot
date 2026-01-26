import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "INVALID_PARAMETER" },
        { status: 400 },
      );
    }

    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
      return NextResponse.json(
        { message: "EMAIL_SYNTAX_INCORRECT" },
        { status: 400 },
      );
    }

    const messages = message
      .replace(/\n/g, "<br>")
      .replace(/\r/g, "<br>")
      .replace(/\t/g, "<br>")
      .replace(/<(?!br\s*\/?)[^>]+>/g, "");

    await resend.emails.send({
      from: `Stage Musical du Lot <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL as string,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${messages}</p>
      `,
    });

    return NextResponse.json(
      { message: "EMAIL_SENT_SUCCESSFULLY" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "ERROR_SENDING_EMAIL" },
      { status: 500 },
    );
  }
}
