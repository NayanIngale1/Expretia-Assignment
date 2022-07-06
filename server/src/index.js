const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const jobController = require('./controllers/jobs.controller')
const {
  registerUser,authUser,
  getUserProfile,
  getUsers,
  updateUserProfile,
  appliedForJob,
  generateToken,
} = require("./controllers/user.controller");

app.get("/", (req, res) => {
    return res.status(200).send(`<h1>Welcome To Get-IT-Job</h1>`);
})

app.use('/jobs', jobController);

app.post("/user/register", registerUser);
app.post("/user/login", authUser);
app.get("/user/get/:id", getUserProfile);
app.get("/user/get/all", getUsers);
app.patch("/user/update/:id", updateUserProfile);
app.patch("/user/:userid/applyjob/:jobid", appliedForJob);

// app.use("/jobapplications");


module.exports = app;