
const adminValidation=(req,res,next)=>{
    try{
        if(req.user.rol!=='admin'){
            return res.status(403).json({message:"No tienes permisos de administrador",permisos:req.user})
        }
        next();
    }catch(err){
        return res.status(401).json({message:"No se encuentra autenticado como administrador","rol":req.user.rol})
    }
}

module.exports=adminValidation