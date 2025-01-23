const express=require("express")
const screenRoutes=express.Router()
const screenTypeControllers=require("../controllers/screenTypeControllers")
const authValidation=require("../middlewares/authValidation")
const adminValidtion=require("../middlewares/adminValidation")
const adminValidation = require("../middlewares/adminValidation")

screenRoutes.post("/addScreen",authValidation,adminValidation,screenTypeControllers.addScreenType)

module.exports=screenRoutes;