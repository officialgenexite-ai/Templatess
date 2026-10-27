import { handleContactSubmission } from "@/controllers/contact.controller";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleContactSubmission(request);
}