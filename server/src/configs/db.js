const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://NayanIngale:nayan123@sampleprojects.qnrzx.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
