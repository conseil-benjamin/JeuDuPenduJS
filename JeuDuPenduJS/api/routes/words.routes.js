const express = require("express");
const { getWords } = require("../controllers/words.controller");
const router = express.Router();

router.get("/", getWords);

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
