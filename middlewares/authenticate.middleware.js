const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"newone",(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.UserID
                // console.log(decoded)
                next()
            }else{
                res.send("please login first")
            }

        })
    }else{
        res.send("please log in first")
    }
}
module.exports={
    authenticate
}