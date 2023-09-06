const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/words.routes"));

// lancer le serveur
app.listen(port, () => console.log("Le serveur à démarrer au port" + port));
