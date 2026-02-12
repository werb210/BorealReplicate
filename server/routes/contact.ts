import { Router } from "express";

type ContactPayload = {
  company?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

const router = Router();

async function sendTwilioSms(messageBody: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhone = process.env.TWILIO_PHONE;

  if (!accountSid || !authToken || !fromPhone) {
    throw new Error("Twilio environment variables are not configured");
  }

  const endpoint = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const authHeader = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      Body: messageBody,
      From: fromPhone,
      To: "+15878881837",
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Twilio request failed: ${response.status} ${errorBody}`);
  }
}

router.post("/", async (req, res) => {
  const { company, firstName, lastName, email, phone } = req.body as ContactPayload;

  if (!company || !firstName || !lastName || !email || !phone) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    await sendTwilioSms(`New Website Lead:\nCompany: ${company}\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`);

    console.log("CRM Lead Stored:", {
      company,
      firstName,
      lastName,
      email,
      phone,
      source: "Website Contact Form",
      createdAt: new Date().toISOString(),
    });

    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
