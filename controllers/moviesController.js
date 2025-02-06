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
        const {nombre,imagen,sinopsis,duracion,estreno}=req.body
        const instanceMovie=new MoviesServices()
        const movieadded=await instanceMovie.addMovie(nombre,imagen,sinopsis,duracion,estreno)
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

exports.getMoviesActivate=async(req,res)=>{
    try{
        const listMovies=await MoviesServices.listAllMoviesActivated()
        return res.status(200).json({"message":"Listed",listMovies})
    }catch(err){
        res.status(400).json({"message":"Error into controller"})
    }
}

exports.getMoviesCartelera=async(req,res)=>{
    try{
        id=req.params.id
        if(id){
            const moviesActivated=await MoviesServices.getMoviesActivateById(id)
            
            return res.status(200).json({"message":"Se encontraron las peliculas activadas",moviesActivated})
        }
        const moviesActivated=await MoviesServices.getMoviesActivate()
        console.log(moviesActivated)
        return res.status(200).json({"message":"Se encontraron las peliculas activadas",moviesActivated})
    }catch(err){
        res.status(400).json({"message":err.message})
    }
}

exports.getMoviesComingSoon=async(req,res)=>{
    try{
        const comingMovies=await MoviesServices.getMoviesComingSoon()
        console.log(comingMovies)
        return res.status(200).json({"message":"It's already exist",comingMovies})
    }catch(err){
        res.status(400).json({"message":"Error into controller"})
    }
}

exports.getFunctionAboutMovie=async(req,res)=>{
    try{
        const id=req.params.id
        const functions=await MoviesServices.getFunctions(id)
        console.log(functions)
        return res.status(200).json({"message":"These are the funtions",functions})
    }catch(err){
        res.status(400).json({"message":"Error into controller",err})
    }
}

exports.getMoviesIntoCinema=async(req,res)=>{
    try{
        const id=req.params.id
        if(!id){
            const gettingMovies=await MoviesServices.getMoviesActivate()
            return res.status(200).json({"message":"Get",gettingMovies})
        }
        console.log(id)
        const gettingMovies=await MoviesServices.getMoviesbyCinema(id)
        console.log(gettingMovies)
        res.status(200).json({"message":"Getting Sucesfully",gettingMovies})
    }catch(err){
        res.status(400).json({"message":"Error into controller",err})
    }
}
