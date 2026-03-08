import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { firstName, lastName, email, resortName, pisteCount, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !resortName || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL;
    if (!toEmail) {
      console.error('CONTACT_EMAIL env var not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: 'Patter Enquiries <enquiries@patter.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `New enquiry: ${resortName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f172a; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #22d3ee; margin: 0; font-size: 24px;">patter<span style="color: #22d3ee;">.</span></h1>
            <p style="color: #94a3b8; margin: 8px 0 0;">New resort enquiry</p>
          </div>

          <div style="background: #1e293b; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Name</td>
                <td style="padding: 10px 0; color: #f1f5f9; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #22d3ee;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Resort</td>
                <td style="padding: 10px 0; color: #f1f5f9; font-weight: 600;">${resortName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Piste count</td>
                <td style="padding: 10px 0; color: #f1f5f9;">${pisteCount || 'Not specified'}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #334155;">
              <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Message</p>
              <p style="color: #f1f5f9; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background: #0f172a; padding: 20px 32px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #475569; font-size: 12px; margin: 0;">Sent from patter.dev contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
