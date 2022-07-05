const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema= mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isProfessional : {
        type: Boolean,
        required: true,
        default: false,
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
    
},{
    versionKey: false,
    timestamps: true
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){  //we also have update profile functionality => there is smeone change user name , email etc, even then password will get hash, then user won't be able to login. So that we don't want
next()
    } 
    
    const salt = await bcrypt.genSalt(10)

    this.password = await bcrypt.hash(this.password, salt)
})


userSchema.methods.matchPassword = async function(enteredPassword){
return await bcrypt.compare(enteredPassword, this.password)
}
const User= mongoose.model("User", userSchema)

module.exports = User;