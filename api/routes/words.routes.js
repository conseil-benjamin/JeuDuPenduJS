const express = require("express");
const {
  getWords,
  getEasyWords,
  getMediumWords,
  getDifficultWords,
  getSingleWords,
  getEasyAndMediumWords,
  getEasyAndHardWords,
  getMediumAndHardWords,
} = require("../controllers/words.controller");
const router = express.Router();
const mongoose = require("mongoose");
const WordsModel = mongoose.model("Words");

router.get("/", getWords);

router.get("/single-word", getSingleWords);

router.get("/easy-words", getEasyWords);

router.get("/medium-words", getMediumWords);

router.get("/difficult-words", getDifficultWords);

router.get("/easy-medium-words", getEasyAndMediumWords);

router.get("/easy-hard-words", getEasyAndHardWords);

router.get("/medium-hard-words", getMediumAndHardWords);

module.exports = router;
