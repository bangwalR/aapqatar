import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, division, message } = body;

    // Validate required fields
    if (!name || !company || !email || !division) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log inquiry (replace with email service like Resend/Nodemailer in production)
    console.log("=== New B2B Inquiry ===");
    console.log("Name:", name);
    console.log("Company:", company);
    console.log("Email:", email);
    console.log("Phone:", phone || "Not provided");
    console.log("Division:", division);
    console.log("Message:", message || "No message");
    console.log("Timestamp:", new Date().toISOString());
    console.log("======================");

    // TODO: Integrate with email service (Resend, Nodemailer, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'inquiries@aapqatar.com',
    //   to: 'info@aapqatar.com',
    //   subject: `New B2B Inquiry from ${company}`,
    //   html: `<p>Name: ${name}</p><p>Company: ${company}</p>...`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. We will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
