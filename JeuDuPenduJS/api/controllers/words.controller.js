const WordsModel = require("../models/words.model");

module.exports.getWords = async (req, res) => {
  const words = await WordsModel.find();
  res.status(200).json(words);
};
