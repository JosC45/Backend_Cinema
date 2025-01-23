const screen_type=require("../models/screen_type")


class ScreenType{
    static addScreenType=async(tipo)=>{
        try{
        if(!tipo){              
            throw new Error("No hay tipo")
        }
        const addedScreen=new screen_type({tipo})
        await addedScreen.save()
        return addedScreen
        }catch(err){
            throw new Error("no se pudo agregar el nuevo tipo")
        }
    }   
}

module.exports=ScreenType