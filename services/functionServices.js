const feature=require("../models/function")

class FeatureServices{
    static addfeature=async(pelicula,sala,asientos_ocupados)=>{
        try{ 
        const newFeature=new feature({pelicula,sala,asientos_ocupados})
        await newFeature.save()
        return newFeature
        }catch(err){
            throw new Error("Error of create")
        }

    }
}

module.exports=FeatureServices