const {validateUser}=require("../services/userServices")
const {createUser}=require("../services/userServices")

exports.loginController=(req,res)=>{
    const {id,username,password,rol}=req.body

    validateUser(username,password,res)
}

exports.addUser=(req,res)=>{
    try{
    const {username,email,password,rol}=req.body
    createUser(username,email,password,rol,res)
    }catch(err){
        res.status(401).json({message:"No se puede crear el usuario con la informacion dada"})
    }
}