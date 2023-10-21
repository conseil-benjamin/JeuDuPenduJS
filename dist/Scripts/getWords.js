/**
 * * Appel API en fonction de la difficulté choisi par l'user
 */

async function getWords() {
  let wordsEasyElement = document.querySelector("#checkboxFacileInput");
  let wordsMediumElement = document.querySelector("#checkboxMoyenInput");
  let wordsHardElement = document.querySelector("#checkboxDifficilenInput");

  const apiUrl = {
    easy: "https://words-api-v1.onrender.com/api/v1/words/easy-words",
    medium: "https://words-api-v1.onrender.com/api/v1/words/medium-words",
    hard: "https://words-api-v1.onrender.com/api/v1/words/difficult-words",
    easyAndMedium:
      "https://words-api-v1.onrender.com/api/v1/words/easy-medium-words",
    easyAndHard:
      "https://words-api-v1.onrender.com/api/v1/words/easy-hard-words",
    mediumAndHard:
      "https://words-api-v1.onrender.com/api/v1/words/medium-hard-words",
    default: "https://words-api-v1.onrender.com/api/v1/words/",
  };

  let selectedApiUrl = apiUrl.default;

  if (
    wordsMediumElement.checked &&
    wordsHardElement.checked &&
    wordsEasyElement.checked
  )
    selectedApiUrl = apiUrl.default;
  else if (wordsMediumElement.checked && wordsHardElement.checked)
    selectedApiUrl = apiUrl.mediumAndHard;
  else if (wordsEasyElement.checked && wordsHardElement.checked)
    selectedApiUrl = apiUrl.easyAndHard;
  else if (wordsEasyElement.checked && wordsMediumElement.checked)
    selectedApiUrl = apiUrl.easyAndMedium;
  else if (wordsEasyElement.checked) selectedApiUrl = apiUrl.easy;
  else if (wordsMediumElement.checked) selectedApiUrl = apiUrl.medium;
  else if (wordsHardElement.checked) selectedApiUrl = apiUrl.hard;
  else {
    selectedApiUrl = apiUrl.default;
  }

  const returnWords = await fetch(selectedApiUrl)
    .then((res) => res.json())
    .catch((error) => console.error("ERROR"));

  return returnWords;
}
