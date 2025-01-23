const hallServices=require("../services/hallServices")

exports.addHall=async(req,res)=>{
    try{
        const{numero_sala,idtipo,precio,idcine,capacidad}=req.body
        const addedHall=await hallServices.aditionHall(numero_sala,idtipo,precio,idcine,capacidad)
        return res.status(200).json({"message":"Added great",addedHall})
    }catch(err){
        res.status(400).json({"message":"Can't added into controller"})
    }
}