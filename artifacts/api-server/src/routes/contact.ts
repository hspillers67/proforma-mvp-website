import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contact] = await db
    .insert(contactsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company ?? null,
      phone: parsed.data.phone ?? null,
      projectType: parsed.data.projectType ?? null,
      message: parsed.data.message,
    })
    .returning();

  req.log.info({ contactId: contact.id }, "New contact submission");

  if (resend) {
    const { name, email, company, phone, projectType, message } = parsed.data;

    const notifyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <div style="background: #001B50; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">
            New Contact Form Submission
          </h1>
        </div>
        <div style="background: #f8f8f8; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e4e4e4; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; width: 140px; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; font-size: 15px;"><a href="mailto:${email}" style="color: #9C0057;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; font-size: 15px;">${company}</td>
            </tr>` : ""}
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; font-size: 15px;"><a href="tel:${phone}" style="color: #9C0057;">${phone}</a></td>
            </tr>` : ""}
            ${projectType ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Project Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; font-size: 15px;">${projectType}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e4e4e4;">
            <a href="mailto:${email}" style="display: inline-block; background: #9C0057; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 700;">
              Reply to ${name}
            </a>
          </div>
        </div>
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 16px;">
          Submitted via proformamvp.com &nbsp;·&nbsp; Contact ID: ${contact.id}
        </p>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <div style="background: #001B50; padding: 32px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: #fff; margin: 0 0 4px; font-size: 22px; font-weight: 700;">Thanks for reaching out, ${name.split(" ")[0]}!</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 15px;">We've received your message.</p>
        </div>
        <div style="background: #f8f8f8; padding: 36px 32px; border-radius: 0 0 8px 8px; border: 1px solid #e4e4e4; border-top: none;">
          <p style="font-size: 16px; line-height: 1.7; margin: 0 0 20px;">
            Our team will review your inquiry and get back to you within <strong>24 hours</strong> with strategic recommendations tailored to your project.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #555; margin: 0 0 32px;">
            In the meantime, if you have any questions or want to reach us directly:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; width: 80px; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e4; font-size: 15px;">
                <a href="mailto:info.mvp@proforma.com" style="color: #9C0057; text-decoration: none;">info.mvp@proforma.com</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #555; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
              <td style="padding: 10px 0; font-size: 15px;">
                <a href="tel:2818313527" style="color: #9C0057; text-decoration: none;">281.831.3527</a>
              </td>
            </tr>
          </table>
          <div style="background: #fff; border: 1px solid #e4e4e4; border-left: 4px solid #9C0057; padding: 16px 20px; border-radius: 4px; margin-bottom: 32px;">
            <p style="margin: 0; font-size: 14px; color: #555; line-height: 1.6;">
              <strong style="color: #111;">Your message:</strong><br/>
              <span style="white-space: pre-wrap;">${message}</span>
            </p>
          </div>
          <p style="font-size: 15px; color: #555; margin: 0;">
            We look forward to working with you.<br/>
            <strong style="color: #001B50;">— The Proforma MVP Marketing Team</strong>
          </p>
        </div>
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 16px;">
          Proforma MVP Marketing &nbsp;·&nbsp; 22136 Westheimer Pkwy #856, Katy, TX 77450
        </p>
      </div>
    `;

    try {
      await Promise.all([
        resend.emails.send({
          from: "ProForma MVP Marketing <onboarding@resend.dev>",
          to: ["info.mvp@proforma.com"],
          replyTo: email,
          subject: `New contact form submission from ${name}`,
          html: notifyHtml,
        }),
        resend.emails.send({
          from: "ProForma MVP Marketing <onboarding@resend.dev>",
          to: [email],
          replyTo: "info.mvp@proforma.com",
          subject: "We received your message — Proforma MVP Marketing",
          html: confirmationHtml,
        }),
      ]);
      req.log.info({ contactId: contact.id }, "Notification and confirmation emails sent");
    } catch (err) {
      req.log.error({ err, contactId: contact.id }, "Failed to send email(s)");
    }
  } else {
    req.log.warn("RESEND_API_KEY not set — skipping email notifications");
  }

  res.status(201).json(contact);
});

export default router;
