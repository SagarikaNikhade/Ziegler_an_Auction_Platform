const express = require("express");
const { AircraftModel } = require("../models/aircraft.model");
const aircraftRouter = express.Router();

aircraftRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       const data = await AircraftModel.insertMany(payload);
       res.send(data);
    }catch(err){
       res.send({"msg":err.message});
    }
})

aircraftRouter.get("/",async(req,res)=>{
   try{
      const data=await AircraftModel.find();
      res.send(data);
   }catch(err){
       res.send({"msg":err.message});
   }
})

module.exports = {aircraftRouter};