// Define Product schema for MongoDB collection structure
import {Schema,model} from 'mongoose'

const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"Product ID is required"]
    },
    productName:{
        type:String,
        required:[true,"Product Name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"Minimum price of the product is 10000"],
        max:[50000,"Product price exceeds 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
},{
    versionKey:false,   // Disable __v field in documents
    timestamps:true     // Auto-add createdAt & updatedAt fields
})

// Create and export Product model
export const ProductModel=model("product",productSchema)