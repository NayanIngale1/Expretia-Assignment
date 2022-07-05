const express = require('express');
const Job = require('../models/job.medel');

const router = express.Router();


router.get("/all",async(req,res)=>{
    try {
        
        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

         const keyword = req.query.keyword
           ? {
               title: {
                 $regex: req.query.keyword,
                 $options: "i", //i here means case insensitive
               },
             }
           : {};
        const jobs = await Job.find({ ...keyword }).skip(skip).limit(limit).lean().exec();
        

        const count = await Job.find({ ...keyword }).count();
          return res.status(200).send({
            jobs: jobs,
            count: Math.ceil(count / limit),
          });
        
    } catch (error) {
        console.log("error:", error);
        return res.status(500).json({ message: error.message, status: "Failed" });
        
        
    }
})
router.get("/category/:category",async(req,res)=>{
    try {

        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const jobs = await Job.find({category:req.params.category}).skip(skip).limit(limit).lean().exec();

        const count = await Job.find().count();
          return res.status(200).send({
            jobs: jobs,
            count: Math.ceil(count / limit),
          });
        
    } catch (error) {
        console.log("error:", error);
        return res.status(500).json({ message: error.message, status: "Failed" });
        
        
    }
})
router.post("/add",async(req,res)=>{
    try {
        const job = await Job.create(req.body)
        res.status(201).send(job);
        
    } catch (error) {
        console.log("error:", error);
        return res
          .status(500)
          .json({ message: error.message, status: "Failed" });
        
        
    }
})




module.exports = router