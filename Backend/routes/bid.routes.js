const express = require("express");
const { BidModel } = require("../models/bid.model");
const bidRouter = express.Router();

bidRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       const data = await BidModel.insertMany(payload);
       res.send(data);
    }catch(err){
       res.send({"msg":err.message});
    }
})

module.exports = {bidRouter};