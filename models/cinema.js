const mongoose=require("mongoose")


const cinemaSchema=mongoose.Schema({
    nombre:{type:String,required:true},
    provincia:{type:mongoose.SchemaTypes.ObjectId, ref:'Ubication',required:true}
    /* peliculas:[{type:mongoose.SchemaTypes.ObjectId, ref:'Movies',required:true}] */
})

module.exports=mongoose.model('Cinema',cinemaSchema)