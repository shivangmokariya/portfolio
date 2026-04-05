import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      description?: unknown;
    };

    const name = isNonEmptyString(body.name) ? body.name.trim() : "";
    const email = isNonEmptyString(body.email) ? body.email.trim() : "";
    const description = isNonEmptyString(body.description)
      ? body.description.trim()
      : "";

    if (!name || !email || !description) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!gmailUser || !emailPass) {
      return Response.json(
        { error: "Mail service is not configured." },
        { status: 500 },
      );
    }

    const packetId = `SHVJ-${crypto.randomUUID().slice(0, 4).toUpperCase()}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio contact: ${name} (${packetId})`,
      text: [
        `Packet ID: ${packetId}`,
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        description,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 16px;">New Portfolio Contact Message</h2>
          <p><strong>Packet ID:</strong> ${packetId}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${description}</pre>
        </div>
      `,
    });

    return Response.json({ ok: true, packetId });
  } catch (error) {
    return Response.json(
      { error: "Unable to send message right now. Please try again." },
      { status: 500 },
    );
  }
}
