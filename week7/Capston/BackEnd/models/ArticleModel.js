import { Schema, model, Types } from 'mongoose'


// Comment

const commentSchema = new Schema({
  user: {
    type: Types.ObjectId,       // Reference to User who made the comment
    ref: "user",                // Must match the User model name
    required: [true, "User Id required"]
  },
  comment: {
    type: String,
    required: [true, "Enter a comment"]
  }
})


//  Article

const articleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId, // Reference to User who authored the article
    ref: "user",
    required: [true, "Author ID is required"]
  },
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  comments: [
    { type: commentSchema, default: [] } // Embedded array of comments
  ],
  isArticleActive: {
    type: Boolean,
    default: true // Soft delete flag (true = active, false = inactive)
  }
},
{
  versionKey: false,   // Disable __v field
  timestamps: true,    // Auto add createdAt & updatedAt
  strict: "throw"      // Throw error if unknown fields are inserted
})


// Create and export Article model

export const ArticleModel = model("article", articleSchema)
