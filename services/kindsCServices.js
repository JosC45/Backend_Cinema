const KindsC=require("../models/kinds_of_cinemas")

class ServicesKind{
    constructor(id,tipo){
        this.id=id
        this.tipo=tipo
    }

    static async addKind(tipo){
        try{
        const newkind=new KindsC(tipo)
        await newkind.save()
        }catch(err){
            res.status(401).json({message:"No valido el tipo"})
        }
    }

}

module.exports=ServicesKind


