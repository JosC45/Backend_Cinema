const mongoose=require("mongoose")

const ubicationSchema=new mongoose.Schema({
    departamento:{type:String,required:true},
})


module.exports=mongoose.model("Ubication",ubicationSchema)