const hall=require("../models/hall")

class hallServices{
    static aditionHall=async(numero_sala,idtipo,precio,idcine,capacidad)=>{
       try{const newHall=new hall({numero_sala,idtipo,precio,idcine,capacidad})
       await newHall.save()
       return newHall
        }catch(err){
            throw new Error("No se agrego en el servicio")
        } 
    }
}

module.exports=hallServices