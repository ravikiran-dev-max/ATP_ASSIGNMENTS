import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

// Create a new Express Router instance for user-specific routes
export const userApp = exp.Router()


// 1. GET - Read All Active Articles

userApp.get('/articles', verifyToken("USER"), async (req, res) => {
    // Fetch all articles that are active (isArticleActive = true)
    let articles = await ArticleModel.find({ isArticleActive: true })

    // Send response with articles
    res.status(200).json({ message: "Articles found successfully", payload: articles })
})

// 2. PUT - Add Comment to an Article

userApp.put('/articles', verifyToken("USER"), async (req, res) => {
    // Extract articleId and comment from request body
    const { articleId, comment } = req.body

    // Find article by ID and ensure it is active
    const articleDocument = await ArticleModel.findOne({ _id: articleId, isArticleActive: true })
        .populate("comments.user") // populate user details in comments

    // If article not found or inactive
    if (!articleDocument) {
        return res.status(404).json({ message: "Article not found" })
    }

    // Get logged-in user ID from decoded token
    const userId = req.user?.id

    // Push new comment into article's comments array
    articleDocument.comments.push({ user: userId, comment: comment })

    // Save updated article document
    await articleDocument.save()

    // Send success response
    res.status(200).json({ message: "Comment added successfully", payload: articleDocument })
})
