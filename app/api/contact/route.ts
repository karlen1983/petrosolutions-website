import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const VALID_SERVICES = new Set([
  "Equipment Sales",
  "Service & Maintenance",
  "Installation & Construction",
  "Merchant Services",
  "Financing",
  "POS / Security Systems",
  "Environmental Monitoring",
  "Other",
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      service,
      message,
      urgent,
      turnstileToken,
    } = body as {
      name?: string;
      company?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
      urgent?: boolean;
      turnstileToken?: string;
    };

    // Verify Cloudflare Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security check required." },
        { status: 400 }
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
          }),
        }
      );
      const verifyData = (await verifyRes.json()) as { success?: boolean };
      if (!verifyData.success) {
        return NextResponse.json(
          { error: "Security check failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Name, email, phone, and service are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!VALID_SERVICES.has(service)) {
      return NextResponse.json(
        { error: "Invalid service selection." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const isUrgent = Boolean(urgent);
    const subjectPrefix = isUrgent ? "[URGENT] " : "";

    const mailOptions = {
      from: `"Petro Solutions Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "info@omsps.com",
      replyTo: email,
      subject: `${subjectPrefix}New Service Request — ${service} (${name}${
        company ? `, ${company}` : ""
      })`,
      html: `
        <h2 style="font-family:Inter,system-ui,sans-serif;color:#1F4B5A;">
          ${isUrgent ? "🚨 URGENT — " : ""}New Petro Solutions Inquiry
        </h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px;font-family:Inter,system-ui,sans-serif;color:#1c1b1b;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;width:160px;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(company || "Not provided")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${escapeHtml(phone.replace(/[^0-9+]/g, ""))}">${escapeHtml(phone)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service Needed</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(service)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Urgent</td><td style="padding:8px;border-bottom:1px solid #eee;">${isUrgent ? "Yes" : "No"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;white-space:pre-wrap;">${escapeHtml(message || "No message provided")}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Petro contact email error:", error);
    return NextResponse.json(
      { error: "Failed to send. Please call us directly at 1-877-84 PETRO." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
