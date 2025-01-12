const mongoose=require("mongoose");
require('dotenv').config();

const connectDB=async()=>{
    try{
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a MongoDB")
    }catch(err){
        console.log("No se pudo conectar al db",err);
        process.exit(1)
    }
}

module.exports=connectDB

