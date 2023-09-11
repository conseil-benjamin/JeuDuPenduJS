const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://Benziii:Anneso73@hangman-api.7l6awhc.mongodb.net/Hangman-Api?retryWrites=true&w=majority",
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
