const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema({
    nombre:{type:String,required:true},
    sinopsis:{type:String,required:true},
    duracion:{type:String,required:true},
    estreno:{type:Date,required:true},
    
})

movieSchema.pre('save',function(next){
    if(this.isModified('duracion')){
    const newduration=this.duracion;
    minutos=newduration%60;
    horas=Math.floor(newduration/60);
    this.duracion=`${horas}:${minutos}`
    }
    next();
})

movieSchema.pre('save',function(next){
    if(this.isModified('estreno')){
        const newEstreno=this.estreno
        newEstreno.setHours(0,0,0,0)
        this.estreno=newEstreno
    }
    next();
})

module.exports=mongoose.model('Movies',movieSchema)