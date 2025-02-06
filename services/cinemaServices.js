const Cinema=require("../models/cinema")
const Hall=require("../models/hall")
const Features=require("../models/function")

class Cine{
    constructor(id,nombre,tipo_cine,peliculas,ubicacion){
        this.id=id
        this.nombre=nombre
        this.tipo_cine=tipo_cine
        this.peliculas=peliculas
        this.ubicacion=ubicacion
    }
    static async getCines(){
        try{
        const listCines=await Cinema.find()
        return listCines
        }catch(err){
            throw new Error("Se presento el siguiente error",err)
        }
    }
    static async getMoviesByCine(id){
        try{
        const cine=await Cinema.findById(id).populate('peliculas')
        if (!cine) {
            throw new Error('Cinema not found');
        }
        // if(cine.tipo_cine==="6784809d08293a351b035e1c"){
        // const moviesByCine=cine.peliculas.map(pelicula=>({//nuevo arreglo
        //     ...pelicula.toObject(),
        //     esEstreno:pelicula.esEstreno(),
        // }));
    }
        // return moviesByCine
        catch(err){
            throw new Error(err)
        }
    }
    static async addCine(nombre,provincia){
        try{
            const newCine=new Cinema({nombre,provincia})
            await newCine.save()
            return newCine
        }catch(err){
            throw new Error(err)
        }
    }
    static async getMoviesbyCinema(id){
        try{
            const mainCinema=await Cinema.findById(id)
            console.log(mainCinema)
            const listHall=await Hall.find({idcine:id})
            console.log(listHall)
            // const featuresbyCine=await Promise.all(listHall.map(async(Hall)=>{
            //     const features=await Features.find({sala:Hall._id})
            //     return features
            // }))
            const featuresbyCine=[]
            for(let Hall of listHall){
                const addedFeature=await Features.find({sala:Hall._id})
                if(addedFeature.length===0){
                continue;   
                }
                featuresbyCine.push(addedFeature)
            }
            // console.log("-------------------")
            // console.log(featuresbyCine)
            return featuresbyCine
        }catch(err){
            throw new Error("Erro al conseguir las peliculas")
        }
    }
    static async getCinemasbyDepartment(id){
        try{
            const listCinemas=await Cinema.find({provincia:id})
        if(!listCinemas){
            throw new Error("No se econtro ningun cine")
        }
        return listCinemas
        }catch(err){
            throw new Error("Error into service")
        }
    }
    
    
}

module.exports=Cine