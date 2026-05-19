import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
const { verify } = jwt

// Load environment variables from .env file
config()

// Middleware factory: verifies JWT and enforces role-based access
export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // 1. Get token from cookies
      const token = req.cookies?.token

      // If no token found, block access
      if (!token) {
        return res.status(401).json({ message: "Please login first" })
      }

      // 2. Verify and decode token using secret key
      let decodedToken = verify(token, process.env.SECRET_KEY)

      // 3. Check if user role matches allowed roles
      if (!allowedRoles.includes(decodedToken.role?.toUpperCase())) {
        return res.status(403).json({ message: "You are not authorized" })
      }

      // 4. Attach decoded token payload to request object
      req.user = decodedToken

      // 5. Continue to next middleware/route
      next()
    } catch (err) {
      // If token is invalid or expired
      res.status(401).json({ message: "Invalid token" })
    }
  }
}
