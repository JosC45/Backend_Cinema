const mongoose=require("mongoose")


const cinemaSchema=mongoose.Schema({
    nombre:{type:String,required:true},
    tipo_cine:{type:mongoose.SchemaTypes.ObjectId, ref:'Kind_Of_Cinema'}
})

module.exports=mongoose.model('Cinema',cinemaSchema)