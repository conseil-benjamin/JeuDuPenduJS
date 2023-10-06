const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB connectée ");
  } catch (err) {
    console.error(err);
    process.exit(); // Appel correct pour quitter le processus en cas d'erreur
  }
}

module.exports = connectDB;
