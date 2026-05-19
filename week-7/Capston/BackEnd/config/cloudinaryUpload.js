import cloudinary from "./cloudinary.js";
import { Readable } from "stream";

// Utility function: Upload a file buffer directly to Cloudinary
export const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    // Create an upload stream targeting the "blog_users" folder in Cloudinary
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blog_users" }, 
      (err, result) => {
        if (err) return reject(err);   // Reject promise if upload fails
        resolve(result);               // Resolve with Cloudinary result object
      }
    );

    // Convert buffer into a readable stream and pipe it into Cloudinary uploader
    Readable.from(buffer).pipe(stream);
  });
};
