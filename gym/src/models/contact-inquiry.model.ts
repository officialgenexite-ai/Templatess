import mongoose, { Schema } from "mongoose";

const contactInquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    goal: { type: String, required: true, maxlength: 80 },
    message: { type: String, trim: true, maxlength: 2000, default: "" },
    notificationStatus: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
    notificationSentAt: { type: Date },
  },
  { timestamps: true },
);

export const ContactInquiry =
  mongoose.models.ContactInquiry ?? mongoose.model("ContactInquiry", contactInquirySchema);