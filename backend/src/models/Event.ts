import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  featuredImage?: string;
  eventDate: Date;
  eventTime: string;
  endDate?: Date;
  location: {
    type: 'physical' | 'virtual' | 'hybrid';
    address?: string;
    venue?: string;
    city?: string;
    country?: string;
    virtualLink?: string;
  };
  category: string;
  tags: string[];
  capacity?: number;
  registeredCount: number;
  registrationDeadline?: Date;
  registrationLink?: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  organizer: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    featuredImage: String,
    eventDate: {
      type: Date,
      required: [true, 'Event date is required'],
    },
    eventTime: {
      type: String,
      required: [true, 'Event time is required'],
    },
    endDate: Date,
    location: {
      type: {
        type: String,
        enum: ['physical', 'virtual', 'hybrid'],
        required: true,
      },
      address: String,
      venue: String,
      city: String,
      country: String,
      virtualLink: String,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    tags: [{
      type: String,
      trim: true,
    }],
    capacity: Number,
    registeredCount: {
      type: Number,
      default: 0,
    },
    registrationDeadline: Date,
    registrationLink: String,
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
      default: 'upcoming',
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
EventSchema.index({ slug: 1 });
EventSchema.index({ eventDate: 1, status: 1 });
EventSchema.index({ status: 1, eventDate: -1 });
EventSchema.index({ category: 1 });
EventSchema.index({ tags: 1 });
EventSchema.index({ title: 'text', description: 'text' });

export default mongoose.model<IEvent>('Event', EventSchema);
