const path = require("path")
const bcrypt = require("bcrypt")


const {CraeteFile ,getFile } = require("../utilities/FileHandeler")
const UserFolder = path.join(__dirname,"..//../.file/UserFile/")

const {GenarateToken} =require('../utilities/utilities')





/// CREATE A USER OR SINGUP
const CreateUserAcc = async (req,res)=>{
    const {email,username, password} = req.body

    if(email && username && password ){
     const ExitsUser = getFile(UserFolder,email)
        if(!ExitsUser){
            const hashPassword = await bcrypt.hash(password,10)
            const userData = {email,username, password:hashPassword}
            const CreateUser = CraeteFile(UserFolder,email,userData)
            res.status(200).json(CreateUser)
        }
     else{
        res.status(400).json({massage:"USER ALREADY EXITS"})
     }

    }
    else{
        res.status(400).json({massage:"ALL FELDS ARE REQUID"})
    }
}


// LOGIN OR SINGIN ACCOUNT

const loginingUserAcc =(req,res)=>{
    const {email,username, password} = req.body
    if(!email && !password){
        res.status(400).json({massage:"All felds Are required"})
    }
    const ExitsUser = getFile(UserFolder,email)
    if(!ExitsUser){
        res.status(404).json({massage:"User not Found"})
    }
     bcrypt.compare(password, ExitsUser.password,(Err,PassMatch)=>{
        if (Err || !PassMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const Token = GenarateToken(ExitsUser)
        res.cookie("Token",Token,{httpOnly: true})
        res.status(200).json({message:"Login Sucess"})
     })
    }

    /// LOGOUT
    const LogoutHandle =(req,res)=>{
        res.clearCookie('Token');
        res.status(200).json({massage:"Logout Sucess"})
    }



module.exports = {CreateUserAcc,loginingUserAcc,LogoutHandle}