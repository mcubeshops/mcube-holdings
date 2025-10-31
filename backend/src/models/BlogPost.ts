import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  featuredImage?: string;
  content: string;
  excerpt: string;
  category: 'blog' | 'press_release' | 'event' | 'industry_insight';
  tags: string[];
  author: mongoose.Types.ObjectId;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  seoTitle?: string;
  seoDescription?: string;
  readTime?: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema = new Schema(
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
    featuredImage: String,
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: 300,
    },
    category: {
      type: String,
      enum: ['blog', 'press_release', 'event', 'industry_insight'],
      required: [true, 'Category is required'],
    },
    tags: [{
      type: String,
      trim: true,
    }],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    publishedAt: Date,
    seoTitle: String,
    seoDescription: String,
    readTime: Number,
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
BlogPostSchema.index({ slug: 1 });
BlogPostSchema.index({ status: 1, publishedAt: -1 });
BlogPostSchema.index({ category: 1, status: 1 });
BlogPostSchema.index({ tags: 1 });
BlogPostSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
