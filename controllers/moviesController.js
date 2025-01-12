const {MoviesServices}=require("../services/moviesServices")

exports.controllergetMovies=(req,res)=>{
    try{
        const listaPeliculas=MoviesServices.getMovies()
        res.status(200).json({message:"Se encontro correctamente",lista:listaPeliculas})
    }
    catch{
        res.status(500).json({message:"No funciona correctamente"})
    }
}

exports.contAddMovies=async(req,res)=>{
    try{
        const {nombre,sinopsis,duracion,estreno}=req.body
        console.log(sinopsis)
        const instanceMovie=new MoviesServices()
        console.log(instanceMovie)
        const movieadded=await instanceMovie.addMovie(nombre,sinopsis,duracion,estreno)
        if(!movieadded){
            return res.status(401).json({message:"No se agrego"})
        }
        res.status(201).json({message:"Se agrego correctamente",movieadded})
    }catch(err){
        res.status(404).json({message:"Can't added the Movie","error":err.message})
    }
}
exports.contUpdateMovies=async(req,res)=>{
    try{
        const updatedMovie=await MoviesServices.editMovie(req.params.id,req.body)
        
        res.status(201).json({message:"Se corrigio",updatedMovie})
    }catch(err){
        res.status(404).json({message:"Error for update the Movie","error":err.message})
    }
}

exports.contDeleteMovies=async(req,res)=>{
    try{
        const deletedMovie=await MoviesServices.deleteMovie(req.params.id)
        res.status(201).json({message:"Se elimino correctamente",deletedMovie})
    }catch(err){
        res.status(404).json({message:"Error deleting Movies","error":err.message})
    }
}

