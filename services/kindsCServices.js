const Kinds_of_c=require("../models/kinds_of_cinemas")

class ServicesKind{
    constructor(id,tipo){
        this.id=id
        this.tipo=tipo
    }

    static async addKind(tipo,precio_normal,precio_estreno){
        try{
        const newkind=new Kinds_of_c({tipo,precio_normal,precio_estreno})
        await newkind.save()
        return newkind
        }catch(err){
            throw new Error("Error en el servicio")
        }
    }
}
module.exports=ServicesKind


