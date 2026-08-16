import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, country, machinery, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // In a real production setup, integrate with CRM/Email service (e.g. Resend, Sendgrid)
    // For now, log the validated enquiry
    console.log("New Engineering Enquiry Received:", {
      name,
      email,
      company,
      phone,
      country,
      machinery,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you — the engineering desk will be in touch shortly.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
