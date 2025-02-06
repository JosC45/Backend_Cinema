require('dotenv').config();
const express=require("express");
const cors=require("cors")
const app=require("./app");
const connectDB = require("./config/db");



const PORT=process.env.PORT
console.log(PORT);
connectDB();

// const corpsOptions={
//     origin:"http://localhost:3000",
//     methods:["GET","POST","PUT","DELETE"],
//     allowedHeaders:['Content-Type', 'Authorization'],
// }
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
