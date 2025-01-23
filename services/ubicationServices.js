const Ubications=require("../models/ubications")
const { MoviesServices } = require("./moviesServices")

class Ubication{
    static getUbications=async()=>{
        try{
        const listUbications=await Ubications.find()
        return listUbications
        }catch(err){
            throw new Error(err)
        }
    }
    static postUbication=async(departamento)=>{
        try{
            const newUbication=new Ubications({departamento})
            await newUbication.save()
            return newUbication
        }catch(err){
            throw new Error(err)
        }
    }
}

module.exports=Ubication