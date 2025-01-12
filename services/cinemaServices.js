const Cinema=require("../models/cinema")


const getCinemas=async ()=>{
    const cinemas=await Cinema.find()
}

module.exports={getCinemas}