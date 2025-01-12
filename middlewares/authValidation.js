const jwt=require("../node_modules/jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    const token =req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(403).json({message:"No tiene llave de acceso"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({message:"Token no valido"})
    }
}

module.exports=authMiddleware;
