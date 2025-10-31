import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  company: string;
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  customQuestions?: Array<{
    question: string;
    type: 'text' | 'textarea' | 'select';
    options?: string[];
    required: boolean;
  }>;
  status: 'draft' | 'active' | 'closed';
  deadline?: Date;
  applicationsCount: number;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'internship'],
      required: [true, 'Job type is required'],
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true,
    },
    salaryRange: {
      min: Number,
      max: Number,
      currency: {
        type: String,
        default: 'USD',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    responsibilities: [{
      type: String,
    }],
    requirements: [{
      type: String,
    }],
    benefits: [{
      type: String,
    }],
    customQuestions: [{
      question: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['text', 'textarea', 'select'],
        default: 'text',
      },
      options: [String],
      required: {
        type: Boolean,
        default: false,
      },
    }],
    status: {
      type: String,
      enum: ['draft', 'active', 'closed'],
      default: 'draft',
    },
    deadline: Date,
    applicationsCount: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for optimization
JobSchema.index({ status: 1, createdAt: -1 });
JobSchema.index({ company: 1, status: 1 });
JobSchema.index({ department: 1, status: 1 });
JobSchema.index({ title: 'text', description: 'text' });

export default mongoose.model<IJob>('Job', JobSchema);
