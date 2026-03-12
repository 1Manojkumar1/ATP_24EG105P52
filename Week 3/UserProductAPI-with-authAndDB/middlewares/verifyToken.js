import jwt from 'jsonwebtoken'
const {verify}=jwt

export function verifyToken(req,res,next){
    //token verification logic
    //console.log("Token object:",req.cookies)
    //to access cookies property of request object we need cookie parser middleware.Otherwise req.cookies will be undefined
    //console.log("Token object:",req.cookies.token)

    const token=req.cookies?.token
    //if req is from unauthorized user (token does not exist)
    if(!token){
        return res.status(401).json({message:"Please Login"})
    }
    //if req is from authorized user (token exists)
    try{
        const decodedToken=verify(token,'abcdef')
        console.log(decodedToken)
        //call next
        next()
    } catch(err){
        // Token verification failed (expired/invalid/tampered) → block access
        res.status(401).json({message:"session expired.please relogin"})
    }
}