import { Schema, model } from 'mongoose'

// User schema definition
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"] // must have first name
  },
  lastName: {
    type: String // optional last name
  },
  email: {
    type: String,
    required: [true, "Email required"], // must have email
    unique: [true, "Email already exists"] // no duplicates
  },
  password: {
    type: String,
    required: [true, "Password required"] // must have password
  },
  role: {
    type: String,
    enum: ["USER", "AUTHOR", "ADMIN"], // only these roles allowed
    required: [true, "Invalid role"]
  },
  profileImageUrl: {
    type: String // optional profile image link
  },
  isUserActive: {
    type: Boolean,
    default: true // active by default
  }
},
{
  timestamps: true,   // adds createdAt & updatedAt
  versionKey: false,  // removes __v field
  strict: "throw"     // throws error if unknown fields are added
})

// Export User model
export const UserModel = model("user", userSchema)
