const ServicesKind=require("../services/kindsCServices")

exports.postKind=(req,res)=>{
    if(true /*es admin*/){
        try{
            const {tipo}=req.body
            ServicesKind.addKind(tipo)
        }catch(err){
            res.status(400).json({message:"Error en el servidor"})
        }
    }
}