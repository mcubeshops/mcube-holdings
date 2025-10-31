import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
  job: mongoose.Types.ObjectId;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  professionalInfo: {
    linkedin?: string;
    portfolio?: string;
    currentCompany?: string;
    yearsExperience?: number;
  };
  documents: {
    resume: string;
    coverLetter?: string;
    additional?: string[];
  };
  responses: Array<{
    question: string;
    answer: string;
  }>;
  status: 'new' | 'reviewed' | 'shortlisted' | 'interview_scheduled' | 'rejected' | 'hired';
  notes?: string;
  statusHistory: Array<{
    status: string;
    changedBy: mongoose.Types.ObjectId;
    changedAt: Date;
    note?: string;
  }>;
  referenceNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    personalInfo: {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
      },
      phone: {
        type: String,
        required: [true, 'Phone is required'],
      },
      location: {
        type: String,
        required: [true, 'Location is required'],
      },
    },
    professionalInfo: {
      linkedin: String,
      portfolio: String,
      currentCompany: String,
      yearsExperience: Number,
    },
    documents: {
      resume: {
        type: String,
        required: [true, 'Resume is required'],
      },
      coverLetter: String,
      additional: [String],
    },
    responses: [{
      question: String,
      answer: String,
    }],
    status: {
      type: String,
      enum: ['new', 'reviewed', 'shortlisted', 'interview_scheduled', 'rejected', 'hired'],
      default: 'new',
    },
    notes: String,
    statusHistory: [{
      status: {
        type: String,
        required: true,
      },
      changedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      changedAt: {
        type: Date,
        default: Date.now,
      },
      note: String,
    }],
    referenceNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ApplicationSchema.index({ job: 1, status: 1, createdAt: -1 });
ApplicationSchema.index({ 'personalInfo.email': 1 });
ApplicationSchema.index({ referenceNumber: 1 });

export default mongoose.model<IApplication>('Application', ApplicationSchema);
