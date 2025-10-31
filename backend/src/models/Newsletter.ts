import mongoose, { Schema, Document } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  status: 'subscribed' | 'unsubscribed';
  subscribedAt: Date;
  unsubscribedAt?: Date;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewsletterSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    status: {
      type: String,
      enum: ['subscribed', 'unsubscribed'],
      default: 'subscribed',
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
    unsubscribedAt: Date,
    source: {
      type: String,
      default: 'website',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
NewsletterSchema.index({ email: 1 });
NewsletterSchema.index({ status: 1, subscribedAt: -1 });

export default mongoose.model<INewsletter>('Newsletter', NewsletterSchema);
