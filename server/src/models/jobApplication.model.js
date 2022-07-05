const mongoose = require('mongoose');


const jobApplicationSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },      
    highest_qualification: {
        type: String,
        required: false
    },
    specialization: {
        type: String,
        required: false
    },
    relocate: {
        type: Boolean,
        required: false
    },
    gender: { type: String ,
        required: false
    },
    experience:{type:Number,
        required: false
    },
    resume: {
        type: String,
        required: false
    },   
    jobId:{ type: mongoose.Schema.Types.ObjectId,
      ref: "job",
      required: true}
    
},{
    versionKey: false,
    timestamps: true
})


const jobApplication = mongoose.model("jobApplication", jobApplicationSchema);

module.exports = jobApplication