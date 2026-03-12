// Import Express framework to create route handlers for user-related operations
import exp from 'express'
// Import User database model to interact with MongoDB 'users' collection
import {UserModel} from '../models/UserModel.js'
// Import bcryptjs functions for secure password hashing and comparison
import {hash,compare} from 'bcryptjs'
// Import jsonwebtoken library for creating/verifying authentication tokens
import jwt from 'jsonwebtoken'
// Import authentication middleware to protect routes (requires valid login token)
import {verifyToken} from '../middlewares/verifyToken.js'
// Destructure 'sign' function from jwt for cleaner token creation syntax
const {sign}=jwt

// Create a new Express Router instance to handle user-related routes separately
export const userApp=exp.Router()

// Define User REST API Routes

    // USER LOGIN: Authenticate user and create session token
userApp.post("/auth",async(req,res)=>{
    // Extract email and password from request body (sent by client login form)
    const {email,password}=req.body;
    // Search database for user with matching email address
    let user=await UserModel.findOne({email:email})
    // If no user found with this email, return error (prevent email enumeration attacks)
    if(!user){
        return res.status(400).json({message:"Invalid email"})
    }
    // Compare plain-text password from request with hashed password in database
    let result=await compare(password,user.password)
    // If passwords don't match, return error
    if(result===false){
        return res.status(400).json({message:"Invalid password"})
    }
    // Passwords match → user authenticated successfully
        // Create JWT token containing user's email (payload), signed with secret key 'abcdef'
        // Token expires in 1 day ("1d") - much longer than previous 20-second test setting
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1d"})
        // Store token securely in HttpOnly cookie (inaccessible to JavaScript, prevents XSS theft)
    res.cookie("token",signedToken,{
        httpOnly:true,      // JavaScript cannot access this cookie (security)
        sameSite:"lax",     // Protects against CSRF attacks
        secure:false        // Set to true in production with HTTPS
    })
    // Send success response with user data (excluding password)
    res.status(200).json({message:"login success",payload:user})
})
    // CREATE NEW USER: Register a new user account
userApp.post("/users",async(req,res)=>{
    // Get new user data (username, password, email, age) from request body
        const newUser=req.body
        // Hash the plain-text password using bcrypt (10 salt rounds = good security/performance balance)
        const hashedPassword=await hash(newUser.password,10)
        // Replace plain password with hashed version before saving to database
        newUser.password=hashedPassword
        // Create new User document instance using UserModel schema/blueprint
        const newUserDocument=new UserModel(newUser)
        // Save the new user document to MongoDB (triggers schema validation rules)
        const result=await newUserDocument.save()
        // Log saved user details to console (password is hashed, safe to log)
        console.log("Result:",result)
        // Send success response with HTTP 201 (Created) status
        res.status(201).json({message:"User Created"})
})

// READ ALL USERS: Fetch list of all registered users (requires authentication)
userApp.get("/users",verifyToken,async(req,res)=>{
    // Query MongoDB to retrieve ALL user documents (passwords remain hashed)
    let usersList=await UserModel.find()
    // Send success response with users array wrapped in 'payload' field
    res.status(200).json({message:"users",payload:usersList})
})

// READ SINGLE USER: Fetch one user by MongoDB ObjectId (requires authentication)
userApp.get("/users/:id",verifyToken,async(req,res)=>{
    // Extract user ID from URL parameter (e.g., /users/69abf976857a6bbd220aeb1f)
    const uid=req.params.id
    // Find user by MongoDB's internal _id field (more efficient than findOne)
    const userObj=await UserModel.findById(uid)
    // If no user found with this ID, return 404 error
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    // Send success response with single user object
    res.status(200).json({message:"user",payload:userObj})
})

// UPDATE USER: Modify existing user data by ID (requires authentication)
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    // Get updated user data from request body
    const modifiedUser=req.body
    // Extract user ID from URL parameter
    const uid=req.params.id

    // Hash the new password (even if unchanged) before saving
    const hashedPassword=await hash(modifiedUser.password,10)

    // Replace plain password with hashed version in modified data
    modifiedUser.password=hashedPassword
    // Find user by ID and update ALL fields with new values
    // {new: true} → returns updated document (not original)
    // {runValidators: true} → re-runs schema validation (min/max length, unique checks)
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})

    // Send success response with updated user object (password remains hashed)
    res.status(200).json({message:"User modified",payload:updatedUser})
})

// DELETE USER: Remove user account by ID (requires authentication)
userApp.delete("/users/:id",verifyToken,async(req,res)=>{
    // Extract user ID from URL parameter
    const uid=req.params.id
    // Find user by ID and delete from database in one operation
    const deletedUser=await UserModel.findByIdAndDelete(uid)
    // If no user found with this ID, return 404 error
    if(!deletedUser){
        return res.status(404).json({message:"User not found"})
    }
    // Send success response with deleted user details (for confirmation)
    res.status(200).json({message:"User Deleted",payload:deletedUser})
})