const cinemaControllers=require("../controllers/cinemasControllers")
const express=require("express")
const cinemaRoutes=express.Router();


cinemaRoutes.get("/",cinemaControllers.controllergetCinema)

module.exports=cinemaRoutes