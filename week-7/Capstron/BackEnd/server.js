import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userApp } from './APIs/UserApi.js'
import { authorApp } from './APIs/AuthorApi.js'
import { adminApp } from './APIs/AdminApi.js'
import { commonApp } from './APIs/CommonApi.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Load environment variables from .env file
config()

// Create Express app
const app = exp()

// Middleware setup

// Parse cookies (needed for JWT stored in cookies)
app.use(cookieParser())

// Enable CORS for frontend (default: localhost:5173 if not set in .env)
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true // allow cookies/auth headers
}))

// Parse JSON request bodies
app.use(exp.json())


// Route mounting
app.use("/user-api", userApp)      // User routes
app.use("/author-api", authorApp)  // Author routes
app.use("/admin-api", adminApp)    // Admin routes
app.use("/auth", commonApp)        // Common routes (register/login/logout)

// =========================
// Server startup
// =========================
const port = process.env.PORT || 6000
app.listen(port, () => console.log(`Server listening on ${port}....`))

// Database connection

const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      console.error("CRITICAL: DB_URL is not defined in environment variables")
      return
    }
    await connect(process.env.DB_URL)
    console.log("DB connected")
  } catch (err) {
    console.log("Error in connecting to database:", err)
  }
}
connectDB()


// Invalid path handler
app.use((req, res, next) => {
  res.status(404).json({ message: `path ${req.url} is invalid` })
})


// Error handling middleware

app.use((err, req, res, next) => {
  console.log("Error message:", err.message)
  console.log("Error name:", err.name)
  console.log("Error code:", err.code)
  console.log("Error cause:", err.cause)
  console.log("Full error:", JSON.stringify(err, null, 2))

  // Validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message })
  }

  // Cast error (invalid ObjectId, etc.)
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message })
  }

  // Duplicate key error (MongoDB code 11000)
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue
  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0]
    const value = keyValue[field]
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    })
  }

  // Default: server-side error
  res.status(err.status || 500).json({
    message: "error occurred",
    error: err.message || "Server side error",
    fullError: err
  })
})
