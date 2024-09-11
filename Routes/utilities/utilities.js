const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const JWT_SECRET = 'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoid2FoaWQgYWhtZWQiLCJ0aW1lIjoiMjAyMCJ9.UpJZw0X7DTaheky1PXLaEWRvS1ycH5-H6QjHhdTZP9FL0FGpSYeOoU7-zZKL6XeHdg6eM2gw3XovtSorC9yMgg';
const EXPIRES_IN = '24h';

const GenarateToken = (user)=>{
 return jwt.sign({email:user.email, username:user.username},JWT_SECRET,{
    expiresIn: EXPIRES_IN,
 })
} 


const authMiddleware =(req,res,next)=>{
    const Token = req.cookies.Token
    if(Token){
        const TokenDecoded = jwt.verify(Token,JWT_SECRET)
        req.user = TokenDecoded   
    }
    else{
        return res.status(401).json({massage:"You are logout"})
    }
     next()
}

module.exports = {GenarateToken,authMiddleware}