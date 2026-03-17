import { Resend } from "resend";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function firstNameFromFullName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0] ?? "there";
}

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  website?: string;
  role: string;
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const payload = body as Partial<ContactPayload>;
  const name = (payload.name ?? "").toString().trim();
  const email = (payload.email ?? "").toString().trim();
  const company = (payload.company ?? "").toString().trim();
  const website = (payload.website ?? "").toString().trim();
  const role = (payload.role ?? "").toString().trim();

  if (!name || !email || !company || !role) {
    return Response.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const internalTo = "hire@arrivetalent.com";
  const from = "ArriveTalent <hire@arrivetalent.com>";
  const replyTo = email;

  const internalSubject = `New contact form submission — ${company} / ${role}`;
  const internalHtml = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
      <h2 style="margin:0 0 12px 0; font-size:18px;">New contact form submission</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0; color:#555;"><strong>Name</strong></td><td style="padding:4px 0;">${escapeHtml(
          name
        )}</td></tr>
        <tr><td style="padding:4px 12px 4px 0; color:#555;"><strong>Email</strong></td><td style="padding:4px 0;">${escapeHtml(
          email
        )}</td></tr>
        <tr><td style="padding:4px 12px 4px 0; color:#555;"><strong>Company</strong></td><td style="padding:4px 0;">${escapeHtml(
          company
        )}</td></tr>
        ${
          website
            ? `<tr><td style="padding:4px 12px 4px 0; color:#555;"><strong>Website</strong></td><td style="padding:4px 0;">${escapeHtml(
                website
              )}</td></tr>`
            : ""
        }
        <tr><td style="padding:4px 12px 4px 0; color:#555;"><strong>Role</strong></td><td style="padding:4px 0;">${escapeHtml(
          role
        )}</td></tr>
      </table>
    </div>
  `.trim();

  const confirmSubject =
    "We've Received Your Request — Here's What Happens Next";
  const confirmHtml = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.6; color: #111;">
      <p style="margin:0 0 14px 0;">Hi ${escapeHtml(
        firstNameFromFullName(name)
      )},</p>
      <p style="margin:0 0 14px 0;">
        Thanks for reaching out to ArriveTalent. We've received your submission and will get back to you within 24 hours with a tailored hiring plan.
      </p>
      <p style="margin:0 0 10px 0;">Here's what to expect from us:</p>
      <ol style="margin:0 0 14px 18px; padding:0;">
        <li style="margin:6px 0;">We'll review your hiring needs and identify the best candidate profile for your role.</li>
        <li style="margin:6px 0;">Within 24 hours, we'll follow up with a clear plan and next steps.</li>
        <li style="margin:6px 0;">Once we're aligned, we get to work — and deliver pre-screened candidates within 72 hours of kickoff.</li>
      </ol>
      <p style="margin:0 0 14px 0;">
        In the meantime, feel free to reply to this email if there's anything you'd like to add.
      </p>
      <p style="margin:0 0 14px 0;">
        Prefer to skip the wait? Book a 15-minute call directly here:
        <a href="https://calendly.com/hire-arrivetalent/30min" style="color:#2563EB;text-decoration:none;">Calendly</a>.
      </p>
      <p style="margin:0 0 18px 0;">Looking forward to working with you.</p>

      <div style="margin-top:6px;padding-top:14px;border-top:1px solid #e5e5e5;font-family:inherit;line-height:1.5;color:#111;">
        <div style="font-weight:700;font-size:15px;margin:0 0 6px 0;">
          The ArriveTalent Team
        </div>

        <div style="font-size:13px;color:#555;margin:0 0 10px 0;">
          Top Talent. Delivered in 72 hours.
        </div>

        <div style="font-size:13px;color:#111;margin:0 0 6px 0;">
          <span style="display:inline-block;vertical-align:baseline;margin-right:6px;color:#777;">✉</span>
          <a href="mailto:hire@arrivetalent.com" style="color:#111;text-decoration:none;">hire@arrivetalent.com</a>
        </div>

        <div style="font-size:13px;color:#111;margin:0;">
          <span style="display:inline-block;vertical-align:baseline;margin-right:6px;color:#777;">🌐</span>
          <a href="https://www.arrivetalent.com" style="color:#111;text-decoration:none;">www.arrivetalent.com</a>
        </div>
      </div>
    </div>
  `.trim();

  try {
    await resend.emails.send({
      from,
      to: internalTo,
      replyTo,
      subject: internalSubject,
      html: internalHtml,
    });

    await resend.emails.send({
      from,
      to: email,
      replyTo,
      subject: confirmSubject,
      html: confirmHtml,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }

  return Response.json({ ok: true });
}

