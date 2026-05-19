import multer from "multer";

// Configure Multer middleware for handling file uploads
export const upload = multer({
  // Store files in memory (RAM) instead of disk
  storage: multer.memoryStorage(),

  // Limit file size to prevent RAM overflow
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB max per file
  },

  // Validate file type for security
  fileFilter: (req, file, cb) => {
    // Allow only JPEG and PNG images
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true) // Accept file
    } else {
      // Reject other file types
      const err = new Error("Only JPG and PNG allowed")
      err.status = 400
      cb(err, false)
    }
  },
})
