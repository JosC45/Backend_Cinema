const ServicesKind=require("../services/kindsCServices")

exports.postKind=async(req,res)=>{
        try{
            const {tipo,precio_normal,precio_estreno}=req.body
            const kindAdded=await ServicesKind.addKind(tipo,precio_normal,precio_estreno)
            res.status(200).json({message:"Its added suvcesfully","kind":kindAdded})
        }catch(err){
            res.status(400).json({message:"Error en el servidor"})
        }
}

