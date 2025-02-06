const User=require("../models/usuario")
const mongoose=require("../node_modules/mongoose")
const jwt=require("../node_modules/jsonwebtoken")

const validateUser=async (username,password,res)=>{
    console.log(username)
    const findedUser=await User.findOne({username})

    if(!findedUser){
        return res.status(401).json({message:"Usuario no encontrado"})
    }
    try{
        const same= await findedUser.comparePassword(password)
        if(!same){
            return res.status(403).json({message:"It isn't the same"})
        }
        const token=jwt.sign({userid:findedUser._id,email:findedUser.email,rol:findedUser.rol},process.env.JWT,{expiresIn:'1d'})
        res.status(200).json({message:"Logueado con exito,su token ","token":token})
    }catch(err){
        return res.status(403).json({message:"Error al buscar la contraseña"})
    }
}
const createUser=async(username,email,password,rol,res)=>{
    try{
    const newUser=new User({username,email,password,rol})
    await newUser.save()
    res.status(201).json({message:"User created sucesfully",user:newUser})
    }catch(err){
        res.status(400).json({message:"Ha ocurrido un error con la solicitud","error":err.message})
    }
}

module.exports={validateUser,createUser}
