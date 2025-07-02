const mongoose = require("mongoose");


connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");
  console.log("Database connected successfully");
};

module.exports = connectDB;