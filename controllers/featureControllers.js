const featureServices=require("../services/functionServices")

exports.addFeature=async(req,res)=>{
    try{
        const {pelicula,sala,asientos_ocupados}=req.body
        const addedFeature=await featureServices.addfeature(pelicula,sala,asientos_ocupados)
        res.status(200).json({"message":"Enjoy the movie",addedFeature})
    }catch(err){
        res.status(400).json({"message":"Error for managament the new feature"})
    }
}