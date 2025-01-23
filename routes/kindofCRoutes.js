const kindsControllers=require("../controllers/kindsControllers")
const adminValidation=require("../middlewares/adminValidation")
const authValidation=require("../middlewares/authValidation")
const express=require("express");
const kindsofCRoutes=express.Router()

kindsofCRoutes.post("/addKindofCinemas",authValidation,adminValidation,kindsControllers.postKind)


module.exports=kindsofCRoutes