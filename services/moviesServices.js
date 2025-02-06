const Movies=require("../models/movies")
const mongoose=require("mongoose")
const Features=require("../models/function")
const Hall=require("../models/hall")
// const getMovies=async ()=>{
//     const listMovies=await Movies.find()
// }

class MoviesServices{
    // constructor(nombre,sinopsis,duracion,estreno) {
    //     this.nombre=nombre
    //     this.sinopsis=sinopsis
    //     this.duracion=duracion
    //     this.estreno=estreno
    // }
    static async getMovies(){
        try{
            const listMovies=await Movies.find()
            return listMovies
        }catch(err){
            res.status(400).json({message:"Error en el servicio de listar"})
        }
    }
    async addMovie(nombre,imagen,sinopsis,duracion,estreno){
        try{
        const newMovie=new Movies({nombre,imagen,sinopsis,duracion,estreno})
        await newMovie.save()
        return newMovie
        }catch(err){
            throw new Error(err);
        }
    }
    static async editMovie(id,update){
            // try{
            // const searchedMovie=await Movies.findbyId({id})
            // }catch(err){
            //     res.status(400).json({message:"No se pudo encontrar"})
            // }
            // const updatedMovie=await searchedMovie
            try{
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error('ID inválido');
            }
            const updateMovie=await Movies.findByIdAndUpdate(id,update,{new:true,runValidators:true})
            if (!updateMovie) {
                throw new Error('Película no encontrada');
            }    
            return updateMovie
        }catch(err){
            throw new Error(err.message);
        }

    }
    static async deleteMovie(id){
        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                throw new Error("Id invalido")
            }
            const deletedMovie=await Movies.findByIdAndDelete(id)
            if(!deletedMovie){
                throw new Error("No se encontro el ID y no se modifico")
            }
            return deletedMovie
        }catch(err){
            throw new Error(err.message);
        }
    }
    static async listAllMoviesActivated(){
        try{
            const moviesActivate=[]
            const listMovies=await Movies.find()
            console.log(listMovies)
            for(let movies of listMovies){
                const movieswithFeature=await Features.find({pelicula:movies._id})
                console.log(movieswithFeature)
                if(movieswithFeature.length===0){
                    continue;
                }
                moviesActivate.push(movieswithFeature)
            }
            console.log(moviesActivate)
            return moviesActivate
        }catch(err){
            throw new Error("Detected error in the Service")
        }
    }
    static async getMoviesActivate(){
        try{
            const moviesActivated=[]
            
            const movies=await Movies.find()
            for(let mov of movies){
                if(mov.estado()==="cartelera"){
                    moviesActivated.push(mov)
                }
            }
            console.log(moviesActivated)
            return moviesActivated
        }catch(err){
            throw new Error("Error intoService")
        }
    }
    static async getMoviesActivateById(id){
        try{
            const movieActivated=[]
            console.log(id)
            const movie=await Movies.findById(id)
            
            if(movie.estado()==="cartelera"){
                console.log(movie)
                movieActivated.push(movie)
                return movieActivated
            }else{
                throw new Error("No se encuentra en cartelera")
            }
            
        }catch(err){
            throw new Error("Error intoService")
        }
    }
    static async getMoviesComingSoon(){
        try{
            const comingsoon_Movies=[]
            const listMovies=await Movies.find()
            for(let movies of listMovies){
                if(movies.estado()==="soon"){
                    comingsoon_Movies.push(movies)
                }
            }
            return comingsoon_Movies
        }catch(err){

        }
    }
    static async getFunctions(id){
        try{
            const movieIntoFeature=await Features.find({pelicula:id})
            console.log(movieIntoFeature)
            return movieIntoFeature
        }catch(err){
            throw new Error("Error into service")
        }
    }
    static async getMoviesbyCinema(idCinema){
        try{
            const salasintoCinema=await Hall.find({idcine:idCinema})
            console.log(salasintoCinema)
            const searchedFeatures=await Promise.all(
                salasintoCinema.map(async(hall)=>{
                try{    
                    const feature=await Features.find({sala:hall._id})
                    
                        return feature
                    
                }catch(err){
                    throw new Error("Error en la promesa",err)
                }
            })
            
                // salasintoCinema.forEach(async(hall)=>{
                //     const feature=await Features.find({sala:hall._id})
                //     if(feature.length!==0){
                //         return feature
                //     }
                // })
        ).then(features => features.flat());
        console.log(searchedFeatures)
        
            // let listFeatures
            // for(let searched of searchedFetaures){
            //     if(searched.length!==0){
            //         listFeatures.push(searched)
            //     }
            // }
            const finallyMovies=await Promise.all(searchedFeatures.map(async(features)=>{
                try{
                    const films=await Movies.findById(features.pelicula)
                    
                    if(films.estado()==="cartelera"){
                        return films
                    }
                    
                }catch(err){
                    console.error("error",err)
                    throw new Error("Error en el finally Movies",err)
                }
            })).then(movies=>movies.flat())
            return finallyMovies
        }catch(err){
            throw new Error("Error into service")
        }
    }
}

module.exports={MoviesServices}