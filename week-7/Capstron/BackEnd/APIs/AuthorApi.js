import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { UserModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

// Create a new Express Router instance for author-specific routes
export const authorApp = exp.Router()

// 1. POST - Write/Publish Article
authorApp.post("/articles", verifyToken("AUTHOR"), async (req, res) => {
    // Get article object from client request body
    const articleObj = req.body

    // Extract user email from decoded token (req.user set by verifyToken middleware)
    let userEmail = req.user.email

    // Validate author existence
    let author = await UserModel.findById(articleObj.author)
    if (!author) {
        return res.status(404).json({ message: "Invalid author" })
    }

    // Ensure the logged-in user matches the author of the article
    if (author.email !== userEmail) {
        return res.status(403).json({ message: "You are not authorized" })
    }

    // Cross-check role to ensure only authors can publish
    if (author.role !== "AUTHOR") {
        return res.status(403).json({ message: "Invalid role [only author can publish the article]" })
    }

    // Create new article document
    const articleDocument = new ArticleModel(articleObj)

    // Save to database
    await articleDocument.save()

    // Send success response
    res.status(201).json({ message: "Article published successfully" })
})

// 2. GET - Read Own Articles

authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
    // Get author ID from decoded token
    let authorIdOfToken = req.user?.id

    // Fetch all articles written by this author
    let articles = await ArticleModel.find({ author: authorIdOfToken })

    // Send response with articles
    res.status(200).json({ message: "Articles", payload: articles })
})

// 3. PUT - Edit Article

authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
    let authorIdOfToken = req.user?.id
    let { articleId, title, category, content } = req.body

    // Update article only if it belongs to the logged-in author
    const updatedArticle = await ArticleModel.findOneAndUpdate(
        { _id: articleId, author: authorIdOfToken },
        { $set: { title, category, content } },
        { new: true } // return updated document
    )

    // If article not found or author mismatch
    if (!updatedArticle) {
        return res.status(403).json({ message: "Not authorized to edit the article" })
    }

    // Send success response
    res.status(200).json({ message: "Article updated successfully", payload: updatedArticle })
})


// 4. PATCH - Soft Delete Article

authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
    // Get author ID from decoded token
    let authorIdOfToken = req.user?.id

    // Extract articleId and new active state from request body
    const { articleId, isArticleActive } = req.body

    // Find article by ID and author
    const articleOfDB = await ArticleModel.findOne({ _id: articleId, author: authorIdOfToken })

    // If article not found or not owned by author
    if (!articleOfDB) {
        return res.status(404).json({ message: "You are not authorized to delete this article/article not found" })
    }

    // If state is already the same, no update needed
    if (isArticleActive == articleOfDB.isArticleActive) {
        return res.status(200).json({ message: "Article is already in the same state" })
    }

    // Update active status (soft delete)
    articleOfDB.isArticleActive = isArticleActive
    await articleOfDB.save()

    res.status(200).json({ message: "Article modified", payload: articleOfDB })
})
