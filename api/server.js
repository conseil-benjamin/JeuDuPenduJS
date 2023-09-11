const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();
//connexion à la DB
connectDB();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/words", require("./routes/words.routes"));

// lancer le serveur
app.listen(PORT, () => console.log("Le serveur à démarrer au port" + PORT));
