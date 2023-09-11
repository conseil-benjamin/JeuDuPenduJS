const express = require("express");
const {
  getWords,
  getEasyWords,
  getMediumWords,
  getDifficultWords,
  getSingleWords,
} = require("../controllers/words.controller");
const router = express.Router();
const mongoose = require("mongoose");
const WordsModel = mongoose.model("Words");

router.get("/", getWords);

router.get("/single-word", getSingleWords);

router.get("/easy-words", getEasyWords);

router.get("/medium-words", getMediumWords);

router.get("/difficult-words", getDifficultWords);

router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Post supprimé id : " + req.params.id });
});

module.exports = router;
