const User = require('../models/user.model');
const jwt = require("jsonwebtoken");


const generateToken = (id) => {
  return jwt.sign({ id }, "JOB_SECRETE", { expiresIn: "30d" });
};



const registerUser = async (req, res) => {
  const { name, email, password } = req.body; 

  const userExists = await User.findOne({ email: email });
  // console.log(user)

  if (userExists) {
   return res
     .status(400)
     .send({ message: "User already Exits", status: "Failed" });
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
   return res.status(201).json({
    user,
      token: generateToken(user._id),
    });
  } else {   
     return res.status(500).json({ message: "Invalid User Data", status: "Failed" });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    return res.status(200).send({
      user,
      token: generateToken(user._id),
    });
  } else {
     return res
       .status(500)
       .json({ message: "Invalid email or Password", status: "Failed" });
  }
};

const getUserProfile = async (req, res) => {
 
  const user = await User.findById(req.params.id);

  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(500).json({ message: "Invalid email or Password", status: "Failed" });
 
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({});
    return res.status(200).send(users);
};


const updateUserProfile = async (req, res) => {

    const user = await User.findOneAndUpdate(
        { _id: req.params.id },
      req.body,
      { new: true }
    );

  if (user) {  

  return res.status(201).send(user)
  } else {
   
    return res
      .status(500)
      .send({ message: "Invalid email or Password", status: "Failed" });
  }
};

const appliedForJob = async (req, res) => {
  console.log('req:', req.params)
  try {

    const test = await User.updateOne(
      { _id: req.params.userid },
      { $push: { applied_jobs: req.params.jobid } },
    );
    if (test.acknowledged === true) {
      const user = await User.findById(req.params.id).lean().exec();
      return res.status(201).send(user);
    }
    return res
      .status(404)
      .send({ data: test, message: "error", error: "something went wrong" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).send({ data: [], message: "error", error: error.message });
  }
};

module.exports = { registerUser,authUser,appliedForJob, getUserProfile, getUsers,updateUserProfile, generateToken };