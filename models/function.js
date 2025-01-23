const mongoose=require("../node_modules/mongoose")

const functionSchema=new mongoose.Schema({
    pelicula:{type:mongoose.SchemaTypes.ObjectId,ref:"Movies",required:true},
    sala:{type:mongoose.SchemaTypes.ObjectId,ref:"Hall",required:true},
    asientos_ocupados:{type:Number,required:true},
    dia:{type:Date,required:true},
    hora_inicio:{type:String,required:true}
},{timestamps:true})

functionSchema.method("Asientos_disponibles",async function(){
    const sala=await this.populate('sala').execPopulate()
    const asientos_disponibles=sala.cantidad - this.asientos_ocupados
    return asientos_disponibles
})

functionSchema.method("OcuparAsientos",function(cantidad){
    if(cantidad<0) throw new Error("Debe ser mayor a 0")
    this.asientos_ocupados=+cantidad;
    return this.save();
})

module.exports=mongoose.model("Function",functionSchema)