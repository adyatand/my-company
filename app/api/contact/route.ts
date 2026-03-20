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
    <div style="margin:0;padding:0;background-color:#ffffff;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;margin:0;padding:0;background-color:#ffffff;">
        <tr>
          <td align="center" style="padding:0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;width:100%;margin:0 auto;border-collapse:collapse;">
              <tr>
                <td align="center" style="background-color:#1d1d1f;padding:28px 24px 22px 24px;">
                  <div style="font-family:'Syne', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:30px;line-height:1.2;font-weight:700;color:#ffffff;letter-spacing:0.2px;">
                    ArriveTalent
                  </div>
                  <div style="margin:14px auto 0 auto;width:88px;height:2px;background-color:#3B82F6;line-height:2px;font-size:2px;">&nbsp;</div>
                </td>
              </tr>

              <tr>
                <td style="background-color:#ffffff;padding:34px 24px 26px 24px;font-family:Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;color:#1d1d1f;">
                  <p style="margin:0 0 14px 0;font-size:17px;line-height:1.6;color:#1d1d1f;">
                    Hi ${escapeHtml(firstNameFromFullName(name))},
                  </p>
                  <p style="margin:0 0 18px 0;font-size:15px;line-height:1.7;color:#1d1d1f;">
                    Thanks for reaching out to ArriveTalent. We&apos;ve received your request and our team is already reviewing your hiring needs.
                  </p>

                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:separate;background-color:#f5f5f7;border:1px solid #e5e5e5;border-left:4px solid #3B82F6;border-radius:10px;">
                    <tr>
                      <td style="padding:18px 16px 16px 16px;">
                        <p style="margin:0 0 10px 0;font-size:13px;line-height:1.4;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;color:#1d1d1f;">
                          What happens next
                        </p>
                        <p style="margin:0 0 9px 0;font-size:14px;line-height:1.65;color:#1d1d1f;">
                          <span style="font-weight:700;color:#3B82F6;">1.</span>
                          We&apos;ll review your hiring needs and identify the best candidate profile for your role.
                        </p>
                        <p style="margin:0 0 9px 0;font-size:14px;line-height:1.65;color:#1d1d1f;">
                          <span style="font-weight:700;color:#3B82F6;">2.</span>
                          Within 24 hours, we&apos;ll follow up with a clear plan and next steps.
                        </p>
                        <p style="margin:0;font-size:14px;line-height:1.65;color:#1d1d1f;">
                          <span style="font-weight:700;color:#3B82F6;">3.</span>
                          Once we&apos;re aligned, we get to work — and deliver qualified, pre-screened candidates who are ready to interview.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <p style="margin:18px 0 0 0;font-size:14px;line-height:1.7;color:#86868b;">
                    In the meantime, feel free to reply to this email with anything you&apos;d like us to know before we follow up.
                  </p>
                  <p style="margin:12px 0 0 0;font-size:14px;line-height:1.7;color:#86868b;">
                    If this email landed in your Promotions folder, please move it to your Primary inbox to make sure you don&apos;t miss our follow-up.
                  </p>
                  <p style="margin:18px 0 0 0;font-size:14px;line-height:1.7;color:#1d1d1f;font-weight:700;">
                    The ArriveTalent Team
                  </p>
                  <p style="margin:4px 0 0 0;font-size:13px;line-height:1.6;color:#3B82F6;font-weight:600;">
                    Stop Sorting Resumes. Start Meeting Candidates
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color:#141414;padding:24px 24px 22px 24px;">
                  <div style="font-family:'Syne', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:24px;line-height:1.2;font-weight:700;color:#ffffff;">
                    ArriveTalent
                  </div>
                  <div style="margin:12px auto 12px auto;width:76px;height:2px;background-color:#3B82F6;line-height:2px;font-size:2px;">&nbsp;</div>
                  <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:12px;line-height:1.7;color:#86868b;">
                    arrivetalent.com&nbsp;&nbsp;|&nbsp;&nbsp;hire@arrivetalent.com
                  </div>
                  <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:12px;line-height:1.7;color:#86868b;">
                    &copy; 2026 ArriveTalent. All rights reserved.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
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

