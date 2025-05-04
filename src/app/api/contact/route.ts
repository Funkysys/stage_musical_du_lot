import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "INVALID_PARAMETER" },
        { status: 400 }
      );
    }

    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
      return NextResponse.json(
        { message: "EMAIL_SYNTAX_INCORRECT" },
        { status: 400 }
      );
    }

    const messages = message
      .replace(/\n/g, "<br>")
      .replace(/\r/g, "<br>")
      .replace(/\t/g, "<br>")
      .replace(/<(?!br\s*\/?)[^>]+>/g, "");

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

    const sendGridMail = {
      to: process.env.ADMIN_EMAIL as string,
      from: process.env.ADMIN_EMAIL as string,
      templateId: "d-87afce6c828f4181b087c284897a51c1",
      dynamic_template_data: {
        name: name,
        email: email,
        message: messages,
      },
    };

    await sgMail.send(sendGridMail);

    return NextResponse.json(
      { message: "EMAIL_SENDED_SUCCESSFULLY" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "ERROR_WITH_SENDGRID" },
      { status: 500 }
    );
  }
}
