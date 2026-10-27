import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { ContactInquiry } from "@/models/contact-inquiry.model";

export type ContactInquiryInput = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
};

let databaseConnection: Promise<typeof mongoose> | undefined;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not configured.");

  databaseConnection ??= mongoose.connect(uri).catch((error: unknown) => {
    databaseConnection = undefined;
    throw error;
  });
  await databaseConnection;
}

async function sendContactNotification(inquiry: ContactInquiryInput) {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT);
  const user = process.env.EMAIL_USER;
  const password = process.env.EMAIL_PASS;

  if (!host || !Number.isInteger(port) || !user || !password) {
    throw new Error("SMTP environment variables are not configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });

  await transporter.sendMail({
    from: user,
    to: process.env.CONTACT_EMAIL_TO || user,
    replyTo: inquiry.email,
    subject: `Gym training request from ${inquiry.name}`,
    text: [
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone}`,
      `Goal: ${inquiry.goal}`,
      `Message: ${inquiry.message || "Not provided"}`,
    ].join("\n"),
  });
}

export async function createContactInquiry(input: ContactInquiryInput) {
  await connectToDatabase();
  const inquiry = await ContactInquiry.create(input);

  try {
    await sendContactNotification(input);
  } catch (error) {
    console.error("Contact request was saved, but email notification failed.", error);
    await ContactInquiry.updateOne(
      { _id: inquiry._id },
      { $set: { notificationStatus: "failed" } },
    ).catch((updateError: unknown) => {
      console.error("Could not update contact notification status.", updateError);
    });
    return { emailSent: false };
  }

  await ContactInquiry.updateOne(
    { _id: inquiry._id },
    { $set: { notificationStatus: "sent", notificationSentAt: new Date() } },
  ).catch((error: unknown) => {
    console.error("Email was sent, but notification status could not be updated.", error);
  });
  return { emailSent: true };
}