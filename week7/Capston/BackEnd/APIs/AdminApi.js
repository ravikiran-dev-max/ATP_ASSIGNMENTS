import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

// Create a new Express Router instance for admin-specific routes
export const adminApp = exp.Router()


// 1. GET all Users (role: USER)

adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
    // Fetch all users with role "USER"
    let users = await UserModel.find({ role: "USER" })
    res.status(200).json({ message: "Users found successfully", payload: users })
})

// 2. GET all Authors (role: AUTHOR)

adminApp.get("/authors", verifyToken("ADMIN"), async (req, res) => {
    // Fetch all users with role "AUTHOR"
    let authors = await UserModel.find({ role: "AUTHOR" })
    res.status(200).json({ message: "Authors found successfully", payload: authors })
})


// 3. PATCH User Active Status
adminApp.patch("/users", verifyToken("ADMIN"), async (req, res) => {
    // Extract userId and new active state from request body
    let { userId, isUserActive } = req.body

    // Find user by ID
    let user = await UserModel.findOne({ _id: userId })
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    // If the state is already the same, no update needed
    if (isUserActive == user.isUserActive) {
        return res.status(200).json({ message: "User is already in the same state" })
    }

    // Update active status and save changes
    user.isUserActive = isUserActive
    await user.save()

    res.status(200).json({ message: "User modified", payload: user })
})
