import { Schema, model } from "mongoose";

// Define employee schema
const empSchema = new Schema(
  {
    // Employee name (required)
    name: {
      type: String,
      required: [true, "Name of employee is required"],
    },
    // Employee email (required and unique)
    email: {
      type: String,
      required: [true, "Email of employee is required"],
      unique: true,
    },
    // Employee mobile number (optional)
    mobile: {
      type: Number,
    },
    // Employee designation (required)
    designation: {
      type: String,
      required: [true, "Designation of employee is required"],
    },
    // Company name (required)
    companyName: {
      type: String,
      required: [true, "Name of company is required"],
    },
  },
  {
    strict: "throw",        // Throw error if unknown fields are passed
    versionKey: false,      // Disable __v field
    timestamps: true,       // Add createdAt and updatedAt fields
  },
);

// Export employee model
export const EmpModel = model("emp", empSchema);
