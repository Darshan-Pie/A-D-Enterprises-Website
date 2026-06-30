import express, { Request, Response } from "express";

const ADMIN_EMAIL = "gamingharmonics@gmail.com";

// Email sending helper using Manus built-in email service
async function sendEmail(to: string, subject: string, htmlContent: string): Promise<boolean> {
  const forgeApiUrl = process.env.BUILT_IN_FORGE_API_URL;
  const forgeApiKey = process.env.BUILT_IN_FORGE_API_KEY;

  if (!forgeApiUrl || !forgeApiKey) {
    console.error("[Email] Email service not configured");
    return false;
  }

  try {
    const endpoint = new URL("v1/email/send", forgeApiUrl.endsWith("/") ? forgeApiUrl : `${forgeApiUrl}/`).toString();
    
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${forgeApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        subject,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text().catch(() => response.statusText);
      console.error(`[Email] Failed to send email to ${to}: ${error}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`[Email] Error sending email to ${to}:`, error);
    return false;
  }
}

export function setupContactAPI(app: express.Express) {
  app.post("/api/contact/submit", express.json(), async (req: Request, res: Response) => {
    try {
      const { name, email, phone, company, subject, message } = req.body;

      // Validation
      if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      if (name.length < 2) {
        return res.status(400).json({ error: "Name must be at least 2 characters" });
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      if (phone.length < 10) {
        return res.status(400).json({ error: "Phone must be at least 10 characters" });
      }

      if (subject.length < 5) {
        return res.status(400).json({ error: "Subject must be at least 5 characters" });
      }

      if (message.length < 10) {
        return res.status(400).json({ error: "Message must be at least 10 characters" });
      }

      // User confirmation email
      const userEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0066cc; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
              .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for contacting <strong>A.D.ENTERPRISES</strong>. We have received your inquiry and appreciate your interest in our products and services.</p>
                
                <h3>Your Message Details:</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
                
                <p>Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 business hours.</p>
                
                <p>If you have any urgent concerns, please feel free to call us at:</p>
                <ul>
                  <li>+91 93770 38505</li>
                  <li>+91 78780 32927</li>
                </ul>
                
                <p>Best regards,<br><strong>A.D.ENTERPRISES Team</strong></p>
              </div>
              <div class="footer">
                <p>&copy; 2024 A.D.ENTERPRISES. All rights reserved.</p>
                <p>32, 33, 38, 39 Shyam Industrial Hub, Kujad Gatrad Road, Bakrol Bujrang, Daskroi, Ahmedabad - 382433, Gujarat, India</p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Admin notification email
      const adminEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #ff6600; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
              .field { margin: 10px 0; }
              .label { font-weight: bold; color: #0066cc; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <p>You have received a new inquiry from the website contact form.</p>
                
                <div class="field">
                  <span class="label">Name:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> ${email}
                </div>
                <div class="field">
                  <span class="label">Phone:</span> ${phone}
                </div>
                ${company ? `<div class="field">
                  <span class="label">Company:</span> ${company}
                </div>` : ""}
                <div class="field">
                  <span class="label">Subject:</span> ${subject}
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <p>${message.replace(/\n/g, "<br>")}</p>
                </div>
                
                <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Send both emails
      const userEmailSent = await sendEmail(
        email,
        "Thank You for Reaching Out - A.D.ENTERPRISES",
        userEmailHtml
      );

      const adminEmailSent = await sendEmail(
        ADMIN_EMAIL,
        `New Contact Form Submission from ${name}`,
        adminEmailHtml
      );

      if (!userEmailSent || !adminEmailSent) {
        return res.status(500).json({ error: "Failed to send email. Please try again later." });
      }

      return res.json({
        success: true,
        message: "Your inquiry has been submitted successfully. You will receive a confirmation email shortly.",
      });
    } catch (error) {
      console.error("[Contact] Error submitting form:", error);
      return res.status(500).json({ error: "Failed to submit form" });
    }
  });
}
