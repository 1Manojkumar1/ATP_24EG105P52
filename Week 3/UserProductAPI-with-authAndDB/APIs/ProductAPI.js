// Import Express framework to create route handlers
import exp from 'express'
// Import Product database model to interact with MongoDB collection
import {ProductModel} from '../models/ProductModel.js'
// Import authentication middleware to protect routes (requires login)
import {verifyToken} from '../middlewares/verifyToken.js'

// Create a new Express Router instance to handle product-related routes separately
export const productApp=exp.Router()

// CREATE: Add a new product to the database (NO login required)
productApp.post("/products",async(req,res)=>{
    // Extract product data sent by client from request body (JSON format)
    const newProduct=req.body
    // Create a new Product document instance using the ProductModel blueprint
    const newProductDocument=new ProductModel(newProduct)
    // Save the new product document to MongoDB database (async operation)
    const result=await newProductDocument.save()
    // Log the saved product details to console for debugging
    console.log("Result:",result)
    // Send success response with HTTP status 201 (Created)
    res.status(201).json({message:"Product Created"})
})

// READ ALL: Fetch list of all products from database (LOGIN required)
productApp.get("/products",verifyToken,async(req,res)=>{
    // Query MongoDB to retrieve ALL product documents
    const productsList=await ProductModel.find()
    // Send success response with products array in 'payload' field
    res.status(200).json({message:"Products",payload:productsList})
})

// READ ONE: Fetch a single product by custom productId (LOGIN required)
productApp.get("/products/:id",verifyToken,async(req,res)=>{
    // Extract productId from URL parameter (comes as string)
    const pid=req.params.id
    // Find product in database where 'productId' field matches the URL parameter
    const productObj=await ProductModel.findOne({productId:pid})
    // If no product found with that ID, send 404 error response
    if(!productObj){
        return res.status(404).json({message:"Product Not found"})
    }
    // Send success response with the found product object
    res.status(200).json({message:"Product",payload:productObj})
})

// UPDATE: Modify an existing product by productId (LOGIN required)
productApp.put("/products/:id",verifyToken,async(req,res)=>{
    // Get updated product data from request body
    const modifiedProduct=req.body
    // Log modified data to console for debugging
    console.log(modifiedProduct)
    // Convert URL parameter (string) to Number for matching 'productId' field
    const pid=Number(req.params.id)
    // Find product by productId and update ALL fields with new values
    // {new: true} → returns updated document (not original)
    // {runValidators: true} → re-runs schema validation rules (min/max price, etc.)
    const updatedProduct=await ProductModel.findOneAndUpdate({productId:pid},{$set:{...modifiedProduct}},{new:true,runValidators:true})
    // If no product found with that ID, send 404 error
    if(!updatedProduct){
        return res.status(404).json({message:"Product Not found"})
    }
    // Send success response with updated product object
    res.status(200).json({message:"Product Updated",payload:updatedProduct})
})

// DELETE: Remove a product by productId (LOGIN required)
productApp.delete("/products/:id",verifyToken,async(req,res)=>{
    // Convert URL parameter to Number for matching 'productId' field
    const pid=Number(req.params.id)
    // Find product by productId and delete it from database
    const deletedProduct=await ProductModel.findOneAndDelete({productId:pid})
    // If no product found with that ID, send 404 error
    if(!deletedProduct){
        return res.status(404).json({message:"Product not found"})
    }
    // Send success response with deleted product details (for confirmation)
    res.status(200).json({message:"Product Deleted",payload:deletedProduct})
})