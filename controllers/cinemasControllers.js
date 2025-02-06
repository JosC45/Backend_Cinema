const Cine=require("../services/cinemaServices")


exports.controllergetCinema=async(req,res)=>{
    try{
        const arCines= await Cine.getCines()
        return res.status(200).json(arCines)
    }catch(err){
        res.status(400).json({message:"Error","error":err})
    }
}
exports.getMoviesByCine=async(req,res)=>{
    try{
        const id=req.params.id
        const corpMovies=await Cine.getMoviesByCine(id)
        res.status(200).json({"message":"Added sucesfully","list":corpMovies})
    }catch(err){
        res.status(400).json({"message":err})
    }
}

exports.addedCinema=async(req,res)=>{
    try{
        const {nombre,ubicacion}=req.body
        const addedCinema=await Cine.addCine(nombre,ubicacion)
        res.status(200).json({"message":"Added Sucesfully","list":addedCinema})
    }catch(err){
        res.status(400).json({"error":err})
    }
}
exports.getMovies=async(req,res)=>{
    try{
        const id=req.params.id
        if(!id){
            return res.status(400).json({"message":"No se encontro el id"})
        }
        const getMoviesByCine=await Cine.getMoviesbyCinema(id)
        return res.status(200).json({"message":"Nice",getMoviesByCine})
    }catch(err){
        return res.status(400).json({"message":"Error until controller"})
    }
}

exports.getCinesByDepartment=async(req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            const resMovies=await Cine.getCines()
            console.log(resMovies)
            return res.status(200).json({"message":"Listed totally",resMovies})
        }
        const resMovies=await Cine.getCinemasbyDepartment(id)
        if(!resMovies){
            res.status(400).json({"message":"No se encontro"})
        }
        return res.status(200).json({"message":"Listed correctly",resMovies})
    }catch(err){
        res.status(400).json(err)
    }
}

