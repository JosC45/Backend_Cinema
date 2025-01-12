const mongoose=require("mongoose")

const priceSchema=new mongoose.Schema({
    id_cine:{type:Schema.Types.ObjectId, ref:"Cinema"},
    id_pelicula:{type:mongoose.SchemaTypes.ObjectId,ref:"Movies"},
})

module.exports=mongoose.model("Price",priceSchema)