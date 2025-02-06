const express=require("express")
const mainRoutes=express.Router()
const mainControllers=require("../controllers/mainControllers")


mainRoutes.use("/",mainControllers)


module.exports=mainRoutes
