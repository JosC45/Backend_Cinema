const mongoose=require("mongoose")

const hallSchema=new mongoose.Schema({
    numero_sala:{type:Number,required:true},
    idtipo:{type:mongoose.SchemaTypes.ObjectId, ref:"Screen_type",required:true},
    precio:{type:Number,required:true},
    idcine:{type:mongoose.SchemaTypes.ObjectId,ref:"Cinema",required:true},
    capacidad:{type:Number,required:true}
})

module.exports=mongoose.model("Hall",hallSchema)