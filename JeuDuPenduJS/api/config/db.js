const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://Benziii:Anneso73@hangman-api.7l6awhc.mongodb.net/",
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
