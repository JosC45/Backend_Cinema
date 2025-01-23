const cinemaControllers=require("../controllers/cinemasControllers")
const express=require("express")
const cinemaRoutes=express.Router();


cinemaRoutes.get("/",cinemaControllers.controllergetCinema)
cinemaRoutes.post("/addCinema",cinemaControllers.addedCinema)
cinemaRoutes.get("/getMoviesByCinema/:id",cinemaControllers.getMovies)


module.exports=cinemaRoutes