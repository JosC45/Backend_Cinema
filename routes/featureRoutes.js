const express=require("express")
const featureRouter=express.Router()
const featureController=require("../controllers/featureControllers")
const authValidation=require("../middlewares/authValidation")
const adminValidation=require("../middlewares/adminValidation")

featureRouter.post("/addFeature",authValidation,adminValidation,featureController.addFeature)

module.exports=featureRouter