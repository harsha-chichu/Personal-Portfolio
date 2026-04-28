import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Send email via Web3Forms
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE") {
      console.log("Contact form submission (no email key configured):", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json({ success: true });
    }

    const payload = JSON.stringify({
      access_key: WEB3FORMS_KEY,
      from_name: name,
      replyto: email,
      subject: `[Portfolio] ${subject}`,
      message: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    console.log("Sending to Web3Forms with key:", WEB3FORMS_KEY.slice(0, 8) + "...");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: payload,
    });

    const responseText = await res.text();
    console.log("Web3Forms status:", res.status, "response:", responseText.slice(0, 200));

    if (!res.ok) {
      return NextResponse.json(
        { error: "Email service returned an error. Please try again later." },
        { status: 502 }
      );
    }

    const result = JSON.parse(responseText);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
