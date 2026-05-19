import exp from 'express'
import { hash, compare } from 'bcryptjs'
import { UserModel } from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
import { upload } from '../config/multer.js'
import { uploadToCloudinary } from '../config/cloudinaryUpload.js'

// Create a new Express Router instance for common routes
export const commonApp = exp.Router()
const { sign } = jwt

// Middleware: parse JSON request bodies
commonApp.use(exp.json())

// 1. POST - Register User
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res, next) => {
    try {
        let allowedRoles = ["USER", "AUTHOR"]

        // Extract user object from request body
        const newUser = req.body

        // Validate role
        if (!allowedRoles.includes(newUser.role)) {
            return res.status(400).json({ message: "Invalid role" })
        }

        let cloudinaryResult
        // Upload profile image to Cloudinary (if provided)
        if (req.file) {
            console.log("Uploading to Cloudinary...", req.file.originalname, req.file.size)
            cloudinaryResult = await uploadToCloudinary(req.file.buffer)
            console.log("Cloudinary upload success:", cloudinaryResult?.secure_url)
        }

        // Attach Cloudinary CDN link to user object
        newUser.profileImageUrl = cloudinaryResult?.secure_url

        // Hash password before saving
        newUser.password = await hash(newUser.password, 12)

        // Create new user document
        const newUserDocument = new UserModel(newUser)

        // Save to database
        await newUserDocument.save()

        // Send success response
        res.status(201).json({ message: "User Created" })
    } catch (err) {
        console.log("Registration error:", err.message)
        next(err)
    }
})

// 2. POST - Login

commonApp.post("/login", async (req, res) => {
    // Extract credentials
    const { email, password } = req.body

    // Find user by email
    let user = await UserModel.findOne({ email: email })
    if (!user) {
        return res.status(400).json({ message: "Invalid email" })
    }

    // Validate password
    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" })
    }

    // Generate JWT token (expires in 1 day)
    const signedToken = sign(
        { id: user._id, email: email, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
    )

    // Set token in httpOnly cookie
    res.cookie("token", signedToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true
    })

    // Remove password before sending user object
    const userObj = user.toObject()
    delete userObj.password

    res.status(200).json({ message: "Login successful", payload: userObj })
})

// 3. GET - Logout

commonApp.get("/logout", (req, res) => {
    // Clear token cookie
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true
    })

    res.status(200).json({ message: "Logout successful" })
})

// 4. GET - Check Auth (Session Validation)

commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {
    try {
        let user = await UserModel.findById(req.user.id)
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }

        const userObj = user.toObject()
        delete userObj.password

        res.status(200).json({ message: "Authorized", payload: userObj })
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
})

// 5. PUT - Change Password

commonApp.put('/password', verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res) => {
    let passwordObj = req.body

    // Prevent same current and new password
    if (passwordObj.currentPassword === passwordObj.newPassword) {
        return res.status(400).json({ message: "Current password and new password are same" })
    }

    // Get user from token
    let userIdOfToken = req.user?.id
    let user = await UserModel.findById(userIdOfToken)

    // Validate current password
    let isPasswordValid = await compare(passwordObj.currentPassword, user.password)
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid current password" })
    }

    // Hash new password
    passwordObj.newPassword = await hash(passwordObj.newPassword, 12)

    // Update password
    user.password = passwordObj.newPassword
    await user.save()

    res.status(200).json({ message: "Password changed successfully" })
})
