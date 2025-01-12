const moviesController=require("../controllers/moviesController")
const express=require("express")
const moviesRoutes=express.Router()
const authValidation=require("../middlewares/authValidation")
const adminValidation=require("../middlewares/adminValidation")

moviesRoutes.get("/seeMovies",authValidation,moviesController.controllergetMovies)
moviesRoutes.post("/addMovie",authValidation,adminValidation,moviesController.contAddMovies)
moviesRoutes.put("/updateMovie/:id",authValidation,adminValidation,moviesController.contUpdateMovies)
moviesRoutes.delete("/deleteMovie/:id",authValidation,adminValidation,moviesController.contDeleteMovies)

module.exports=moviesRoutes;
