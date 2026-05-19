import { v2 as cloudinary } from "cloudinary";
import { config } from 'dotenv'

// Load environment variables from .env file
config()

// Configure Cloudinary with credentials stored in environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // Cloudinary account name
  api_key: process.env.CLOUDINARY_API_KEY,         // API key for authentication
  api_secret: process.env.CLOUDINARY_API_SECRET,   // API secret for secure access
});

// Export configured Cloudinary instance for use in other modules
export default cloudinary;
