// Define User schema for MongoDB collection structure
import {Schema,model} from 'mongoose'

const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of Username is 4 characters"],
        maxLength:[6,"Username size exceed 6 characters"],
        unique:[true,"Username already exists"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already exists"]
        // pattern:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Invalid email format"]
    },
    age:{
        type:Number
    }
},{
    versionKey:false,   // Disable __v field in documents
    timestamps:true     // Auto-add createdAt & updatedAt fields
})

// Create and export User model
export const UserModel=model("user",userSchema)