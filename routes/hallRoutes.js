const express=require("express")
const hallRouter=express.Router()
const authValidation=require("../middlewares/authValidation")
const adminValidation=require("../middlewares/adminValidation")
const hallControllers=require("../controllers/hallControllers")


hallRouter.post("/addHall",authValidation,adminValidation,hallControllers.addHall)

module.exports=hallRouter