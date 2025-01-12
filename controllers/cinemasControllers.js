const {getCinemas}=require("../services/cinemaServices")


exports.controllergetCinema=(req,res)=>{
    try{
        getCinemas();
    }catch(err){
        res.status(500).json({message:"Error en el servidor"})
    }
}
