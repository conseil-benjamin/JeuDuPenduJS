const mongoose = require("mongoose");

const wordsSchema = mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  mask: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  generated: {
    type: Boolean,
    required: true,
  },
  clue: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Words", wordsSchema);
