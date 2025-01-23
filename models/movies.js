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

movieSchema.method('esEstreno',function(){
    const fechaActual=new Date()
    const fechaEstreno=this.estreno

    function obtenerEstreno(ultimaFecha,estrenoFecha){
    const milisDias=1000*60*60*24
    const diasDiff=Math.abs(ultimaFecha-estrenoFecha)
    return diasDiff/milisDias<=7
    }
    return obtenerEstreno(fechaActual,fechaEstreno)
})

movieSchema.method("estado",function(){
    const fechaActual=new Date()
    const fechaEstreno=this.estreno

    function esta_cartelera(fechaHoy,fechaEstren){
        if(fechaEstren>fechaHoy){
            return "soon"
        }
        const milisecDias=1000*24*60*60
        const diasDiff=Math.abs(fechaHoy-fechaEstren)
        if(diasDiff/milisecDias<=35){
            return "cartelera"
        }
        else{
            return "finished"
        }
    }
    return esta_cartelera(fechaActual,fechaEstreno)
})

module.exports=mongoose.model('Movies',movieSchema)