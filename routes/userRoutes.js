const express=require("../node_modules/express")
const userRoutes=express.Router()
const userControllers=require("../controllers/userControllers")

userRoutes.post("/login",userControllers.loginController)
userRoutes.post("/register",userControllers.addUser)

module.exports=userRoutes