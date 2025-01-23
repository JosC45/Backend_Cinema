const express=require("express")
const ubicationRouter=express.Router()
const ubicationCont=require("../controllers/ubicationControllers")

ubicationRouter.get("/getUbications",ubicationCont.getUbications)
ubicationRouter.post("/addUbication",ubicationCont.addUbication)


module.exports=ubicationRouter