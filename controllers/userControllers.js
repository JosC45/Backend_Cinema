const {validateUser}=require("../services/userServices")
const {createUser}=require("../services/userServices") 
const adminValidation=require("../middlewares/adminValidation")
const authValidation=require("../middlewares/authValidation")

exports.loginController=(req,res)=>{
    const {username,password}=req.body

    validateUser(username,password,res)
}

exports.addUser=(req,res)=>{
    try{
        const {username,email,password,rol}=req.body
    if(rol==="user"){
        createUser(username,email,password,rol,res)
    }
    else if(rol==="admin"){
        authValidation(req,res,()=>{
            adminValidation(req,res,()=>{
                createUser(username,email,password,rol,res)
            })
        })
        
    }else{
        res.status(400).json({message:"No se puede crear usuario con ese rol","error":error.message})
    }

    }catch(err){
        res.status(401).json({message:"No se puede crear el usuario con la informacion dada","error":err.message})
    }
}