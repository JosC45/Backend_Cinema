const mongoose=require("mongoose")

const kindsSchema=new mongoose.Schema({
    tipo:{type:String,required:true}
})

module.exports=mongoose.model("Kind_Of_Cinema",kindsSchema)

