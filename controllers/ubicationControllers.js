const ubicationServices=require("../services/ubicationServices")

exports.getUbications=async(req,res)=>{
    try{
        const listUbi=await ubicationServices.getUbications()
        res.status(200).json({"message":"Taked sucesfully","lista":listUbi})
    }catch(err){
        res.status(400).json({"error":err})
    }
}

exports.addUbication=async(req,res)=>{
    try{
        const {departamento}=req.body
        const addedUbication=await ubicationServices.postUbication(departamento)
        res.status(200).json({"message":"Added sucesfully","lista":addedUbication})
    }catch(err){
        res.status(400).json({"error":err})
    }
}