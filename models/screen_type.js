const mongoose=require("mongoose")


const screenSchema=new mongoose.Schema({
    tipo:{type:String,required:true}
})

module.exports=mongoose.model("Screen_type",screenSchema)