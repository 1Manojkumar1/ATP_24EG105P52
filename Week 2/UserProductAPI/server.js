//Create HTTP server
import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

//set a port number
const port=3000
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening on port ${port}...`))

//Test data (Replace this test data with DB)
let users=[]
let products=[]

//Create API (REST API) => Representational State Transfer  API

    //Route to handle GET req of client(http://localhost:3000/users)
    app.get('/users',(req,res)=>{
        //send response to client
        //Get all users
        res.json({message:"All Users",payload:users})
    })

    //Route to read user by id
    app.get('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id)
        //find user whose id matches with url id
        let user=users.find(userObj=>userObj.id===idOfUrl)
        //if user not found
        if(user===undefined){
            return res.json("User not found")
        }
        //send response with user data
        res.json({payload:user})
    })

    //Route to handle POST req of client
    app.post('/users',(req,res)=>{
        //get user from client
        const newUser=req.body
        //push user into users array
        users.push(newUser)
        //send response to client
        res.json({message:"User Created"})
    })

    //Route to handle PUT request of client
    app.put('/users',(req,res)=>{
        //get modified user from client {}
        let modifiedUser=req.body
        //get index of existing user in users array
        let index=users.findIndex((userObject=>userObject.id===modifiedUser.id))
        //if user not found
        if(index===-1){
            return res.json({message:"User not found"})
        }
        //update user with index
        users.splice(index,1,modifiedUser)
        //send response to client
        res.json({message:"User Updated"})
    })

    //Route to handle DELETE req of client
    app.delete('/users/:id',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id) //{id:'101'}
        //find index of user
        let index=users.findIndex(userObj=>userObj.id===idOfUrl)
        //if user not found
        if(index===-1){
            return res.json("User not found")
        }
        //delete user by index
        users.splice(index,1)
        //send response
        res.json("User removed")
    })



//Create product API (REST API)
    //Create new product({productId,name,brand,price})
    //Read all products
    //Read all product by brand
    //Update a product
    //Delete a product by id


    //Route to handle GET req of client(http://localhost:3000/products)
    app.get('/products',(req,res)=>{
        //send response to client
        //Get all products
        res.json({message:"All Products",payload:products})
    })

    //Route to read product by brand
    app.get('/products/:brand',(req,res)=>{
        //get brand from url parameter
        let brandOfUrl=req.params.brand
        //find product whose brand matches with url brand
        let product=products.find(productObj=>productObj.brand===brandOfUrl)
        //if product not found
        if(product===undefined){
            return res.json("Product not found")
        }
        //send response with product data
        res.json({payload:product})
    })

    //Route to handle POST req of client
    app.post('/products',(req,res)=>{
        //get product from client
        const newProduct=req.body
        //push product into products array
        products.push(newProduct)
        //send response to client
        res.json({message:"Product Created"})
    })

    //Route to handle PUT request of client
    app.put('/products',(req,res)=>{
        //get modified product from client {}
        let modifiedProduct=req.body
        //get index of existing product in products array
        let index=products.findIndex((productObject=>productObject.productId===modifiedProduct.productId))
        //if product not found
        if(index===-1){
            return res.json({message:"Product not found"})
        }
        //update product with index
        products.splice(index,1,modifiedProduct)
        //send response to client
        res.json({message:"Product Updated"})
    })

    //Route to handle DELETE req of client
    app.delete('/products/:id',(req,res)=>{
        //get id of product from url parameter
        let idOfUrl=Number(req.params.id)
        //find index of product
        let index=products.findIndex(productObj=>productObj.productId===idOfUrl)
        //if product not found
        if(index===-1){
            return res.json("Product not found")
        }
        //delete product by index
        products.splice(index,1)
        //send response
        res.json("Product removed")
    })