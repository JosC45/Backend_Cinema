const Movies=require("../models/movies")
const mongoose=require("mongoose")

// const getMovies=async ()=>{
//     const listMovies=await Movies.find()
// }

class MoviesServices{
    constructor(nombre,sinopsis,duracion,estreno) {
        this.nombre=nombre
        this.sinopsis=sinopsis
        this.duracion=duracion
        this.estreno=estreno
    }
    static async getMovies(){
        try{
            const listMovies=await Movies.find()
            return listMovies
        }catch(err){
            res.status(400).json({message:"Error en el servicio de listar"})
        }
    }
    async addMovie(nombre,sinopsis,duracion,estreno){
        try{
        const newMovie=new Movies({nombre,sinopsis,duracion,estreno})
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
}



module.exports={MoviesServices}