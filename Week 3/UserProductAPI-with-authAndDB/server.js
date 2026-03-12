//create express app
import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
const app=exp()
//add body parser
app.use(exp.json())
//add cookie parser
app.use(cookieParser())
const port=3000

//forward req to UserAppp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//Connect to DB Server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/manojdb2")
        console.log("DB connected successfully")
        //start server
        app.listen(port,()=>{console.log(`Your server is running in port ${port}...`)})
    }
    catch(err){
        console.log("error in DB connection",err)
    }
}
connectDB()

//error handling middleware
app.use((err,req,res,next)=>{
    // res.json({message:"error occured",error:err.message})
    //Validation error
    console.log(err.name)
    console.log(err.code)
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"Error occured in validation",error:err.message})
    }
    //Cast Error
    if(err.name==="CastError"){
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    //send server side error
    res.status(500).json({message:"Error occured",error:err.message})
})