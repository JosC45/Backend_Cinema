const mongoose=require("mongoose")

const kindsSchema=new mongoose.Schema({
    tipo:{type:String,required:true},
    precio_normal:{type:Number,required:true},
    precio_estreno:{type:Number,required:true}
})

module.exports=mongoose.model("Kind_Of_Cinema",kindsSchema)

