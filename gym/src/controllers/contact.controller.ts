import { z } from "zod";
import { createContactInquiry } from "@/services/contact.service";

const contactInquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(1).max(40),
  goal: z.enum(["Build strength", "Lose weight", "Learn boxing", "General fitness"]),
  message: z.string().trim().max(2000).default(""),
});

export async function handleContactSubmission(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Request body must be valid JSON." }, { status: 400 });
  }

  const parsed = contactInquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ message: "Please check the contact form fields." }, { status: 400 });
  }

  try {
    const result = await createContactInquiry(parsed.data);
    return Response.json(
      { message: "Contact request received.", emailSent: result.emailSent },
      { status: result.emailSent ? 201 : 202 },
    );
  } catch (error) {
    console.error("Could not save contact request.", error);
    return Response.json({ message: "Could not save your request." }, { status: 500 });
  }
}