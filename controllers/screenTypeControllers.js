const screenTypeServices=require("../services/screenTypeServices")


exports.addScreenType=async(req,res)=>{
    try{
        const {tipo}=req.body
        if(!tipo){
            return res.status(401).json({"message":"No se mando un json tipo"})
        }
        const addedScreen=await screenTypeServices.addScreenType(tipo)
        return res.status(200).json({"message":"Added Sucesfully","Agregado":addedScreen})
    }catch(err){
        return res.status(400).json({"message":"No paso el controlador",err})
    }
}