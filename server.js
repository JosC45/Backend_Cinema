require('dotenv').config();
const express=require("express");
const app=require("./app");
const connectDB = require("./config/db");

const PORT=process.env.PORT
console.log(PORT);
connectDB();



app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})