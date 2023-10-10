// Jerick Paraso | 301268477 | 10-08-2023
const mongoose = require("mongoose");
require("dotenv").config();

async function mongoConnect() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected..");
}

module.exports = {
  mongoConnect,
};
