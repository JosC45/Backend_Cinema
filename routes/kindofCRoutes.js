const kindsControllers=require("../controllers/kindsControllers")
const express=require("express");
const kindsofCRoutes=express.Router()

kindsofCRoutes.post("/addKindofCinemas",kindsControllers.postKind)


module.exports=kindsofCRoutes