let motGenere = false;
let motEnCours;
let motRandomRevele;
let words = [];
let wordsActuel;
let word;
let mask;
let clue;
let aide;
let score = 0;
let nbChances = 10;
let nbMots = 0;
let nbRestart = 0;
let nbMotsGenere = 0;
let historique = [];
let lettreRestante = ["A","B","C","D"
                      ,"E","F","G","H","I","J","K"
                    ,"L","M","N","O","P","Q","R","S",
                    "T","U","V","W","X","Y","Z"];

/**
 * * méthode qui permet de remplacer un underscore par la lettre à l'index correspondant
*/
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

/**
 * * permet une fois le DOM de chargé de générer tous les trucs nécessaire au démarrage du jeu
 */
// 

function resetValue(){
  document.querySelector("#lettre").value = "";
  let images = document.querySelector("#image");
  let aideLabel = document.querySelector("#aideLabel");
  motGenere = false;
  nbChances = 10;
  lettreRestante = ["A","B","C","D"
                  ,"E","F","G","H","I","J","K"
                ,"L","M","N","O","P","Q","R","S",
                "T","U","V","W","X","Y","Z"];
  historique = [];
  images.src = "/dist/images/start.png";
  aideLabel.textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  let btnRejouer = document.querySelector("#btn-rejouer");

  if (btnRejouer) {
    btnRejouer.addEventListener("click", () => {
      nbRestart++;
      resetValue();
      lancement();
    });
  } else {
    console.error("L'élément avec l'ID 'btn-rejouer' n'a pas été trouvé.");
  }

    let lettre = document.querySelector("#lettre");
    let btnValider = document.querySelector("#btn-valider");

  /**
     * * permet de vérifier le contenu de l'input lettre
     */
  lettre.addEventListener("input", () => {
    let lettreTape = lettre.value;
    verificationInput(lettreTape, btnValider);
  });

  /**
   * * permet de valider sa lettre avec la touche "entrer"
   */
  lettre.addEventListener('keypress', function (e) {
    let lettreTape = lettre.value;
    if(!isVoidInput(lettreTape) && isOnlyOneCharacter(lettreTape) && !isLetterUsed(lettreTape, btnValider) && isStringOnlyLetters(lettreTape)){
      if (e.key === 'Enter') {
        jeu();
      }
    } else{
      btnValider.disabled = true;
    }
  });
});
/**
 * * permet d'initialiser tout ce qu'il faut avant que le joueur commence à jouer
 */
// 
function initialisation(){
  let rules = document.querySelector(".rules");
  rules.style.display = "none";

  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "block";

  let historique = document.querySelector(".zoneHistorique");
  historique.style.display = "block";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";

  let zoneSettings = document.querySelector(".zoneSettings");
  zoneSettings.style = " display: flex; align-items: center; justify-content: center; padding: 2em; margin: 3em; width= 20%";
 
  let btnBackHomePage = document.querySelector("#backHomePageID");
  btnBackHomePage.style.display = "block";

  lancement();
}


function retourPageAcueil(){
  let rules = document.querySelector(".rules");
  rules.style.display = "block";

  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "none";

  let historique = document.querySelector(".zoneHistorique");
  historique.style.display = "none";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "block";

  let btnBackHomePage = document.querySelector("#backHomePageID");
  btnBackHomePage.style.display = "none";
}


/**
 * * Appel API en fonction de la difficulté choisi par l'user
 */
async function getWords(){
  let wordsEasyElement = document.querySelector("#checkboxFacileInput");
  let wordsMediumElement = document.querySelector("#checkboxMoyenInput");
  let wordsHardElement = document.querySelector("#checkboxDifficilenInput");

  const apiUrl = {
    easy: "https://words-api-v1.onrender.com/api/v1/words/easy-words",
    medium: "https://words-api-v1.onrender.com/api/v1/words/medium-words",
    hard: "https://words-api-v1.onrender.com/api/v1/words/difficult-words",
    easyAndMedium: "https://words-api-v1.onrender.com/api/v1/words/easy-medium-words",
    easyAndHard: "https://words-api-v1.onrender.com/api/v1/words/easy-hard-words",
    mediumAndHard: "https://words-api-v1.onrender.com/api/v1/words/medium-hard-words",
    default: "https://words-api-v1.onrender.com/api/v1/words/",
  };

  let selectedApiUrl = apiUrl.default;

  if (wordsMediumElement.checked && wordsHardElement.checked && wordsEasyElement.checked) selectedApiUrl = apiUrl.default;
  else if (wordsMediumElement.checked && wordsHardElement.checked) selectedApiUrl = apiUrl.mediumAndHard;
  else if (wordsEasyElement.checked && wordsHardElement.checked) selectedApiUrl = apiUrl.easyAndHard;
  else if (wordsEasyElement.checked && wordsMediumElement.checked) selectedApiUrl = apiUrl.easyAndMedium;
  else if (wordsEasyElement.checked) selectedApiUrl = apiUrl.easy;
  else if (wordsMediumElement.checked) selectedApiUrl = apiUrl.medium;
  else if (wordsHardElement.checked) selectedApiUrl = apiUrl.hard;
  else{
    selectedApiUrl = apiUrl.default;
  }

  const returnWords = await fetch(selectedApiUrl)
    .then((res) => res.json())
    .catch((error) => console.error("ERROR"));

  return returnWords;
}

async function lancement() {
  console.log("---------------------------------------------------");

  let mot = document.querySelector("#textePendu");
  let checkbox = document.querySelector("#checkBoxAide");

  checkbox.checked ? aide = true : aide = false;
    /**
      ** récupération des mots dans la BDD via mon API
      ** et affichage d'un mot aléatoire à l'écran 
    */
    if (!motGenere) {
      try{
        if (nbRestart === 0) {
          console.log(nbRestart);
          words = await getWords(); 
        }
        let wordIndex = Math.floor(Math.random() * words.length);
        let wordJson = words[wordIndex];
        mask = wordJson.mask;
        word = wordJson.word;
        clue = wordJson.clue;
        difficulty = wordJson.difficulty;
        console.log(words);
        let indexToRemove = words.indexOf(word);
        console.log(word);
        console.log(indexToRemove);
        words.splice(indexToRemove, 1); 
        console.log(words);
        motEnCours = mask;
      }
      catch (error){
        console.error("Une erreur est survenue : ", error);
      }
    } 
  motGenere = true;
  mot.textContent = motEnCours;
  jeu(word);
} 

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function jeu(motRandomRevele) {
  let lettre = document.querySelector("#lettre");
  let lettreBonne = false;
  let nbChancesElement = document.querySelector("#nbChances");
  let btnValider = document.querySelector("#btn-valider");
  let mot = document.querySelector("#textePendu");
  let lettreTape = lettre.value;
  lettreTape = lettreTape.toLowerCase();
  let count = 0;

  btnValider.disabled = true;
  
  console.log(motEnCours);
  console.log(word);  


  /**
    ** boucle pour chercher une lettre correspondant à l'input
    ** dans le mot à trouver si trouver remplacer par l'input à l'index qu'il faut 
  */
  for (let i = 0; i < motEnCours.length; i++) {
    if (lettreTape === word[i]) {
      lettreTape = lettreTape.toLowerCase();
      motEnCours = motEnCours.replaceAt(i * 2, word[i]);
      count++;
      lettreBonne = true;
    }
  }
  /**
   **  affichage du mot actualisé à l'écran
   */
  mot.textContent = motEnCours;

  /**
   ** permet de vérifier si la lettre rentré 
   ** a été correct ou non
   */

  count === 0 ? (lettreBonne = false) : (lettreBonne = true);
  creationHistorique(lettreTape);
  affichageLettreRestante(lettreTape);

  // affichage des différents paragraphes
  nbChancesElement.textContent = `Nombre de chances : ${nbChances}`;
  document.querySelector("#score").innerHTML = `Score : ${score} / ${nbMots}`;

  /**
   ** permet que la logique du jeu ne joue pas un
   ** tour sans que le joueur puisse commencer
   ** sinon il commence direct avec nbChances --
   */
  isVoidInput(lettreTape)
    ? console.log("Début")
    : isEndGameOrNot(btnValider, word, lettreBonne);
}

/**
 * * fonction permettant de vérifier si le mot à été trouver
 * * ou bien si son nombres de chances et arrivé à 0
 */

function isEndGameOrNot(btnValider, motRandomRevele, lettreBonne) {
  let nbChancesElement = document.querySelector("#nbChances");
  let motSansEspace;
  let gagne = false;
  let message = "";
  document.querySelector("#lettre").value = "";
  document.querySelector("#score").innerHTML = `Score : ${score} / ${nbMots}`;
  /**
   * * enlève les espaces dans le motEnCours pour pouvoir ensuite
   * * comparer le mot trouver du user et le mot à trouver
   */
  motSansEspace = motEnCours.replace(/\s/g, "");

  /**
   * * Opération ternaire qui vérifie dabord si le mot trouvé est correct, si le cas alors 
   * * appel fonction finJeu, si nbChances = 0 finJeu === Perdu
   * * sinon on vérifie si la lettre rentré par l'user est correct, si non on décremente son
   * * nombre de chances et on revérifie derrière si c'est perdu ou non, si lettreBonne = true 
   * * alors on affiche juste son nombre de chance actuel
   */
  motSansEspace === motRandomRevele
    ? ((gagne = true), score++, finJeu(gagne, motRandomRevele, btnValider))
    : nbChances === 0
    ? ((gagne = false), finJeu(gagne, motRandomRevele, btnValider))
    : !lettreBonne
    ? (nbChances--,
      generatedImages(),
      /**
       * * Vérifie si après avoir décrémenter son nombre de chances est 
       * * arrivé à 0, si le cas alors on appelle la fonction finJeu()
       * * sinon on retourne rien
       */
      (nbChances === 0 ? ((gagne = false), finJeu(gagne, motRandomRevele, btnValider)) : null),
      (message = "Nombre de chances : " + nbChances),
      (document.getElementById("nbChances").innerHTML = message))
    : (nbChancesElement.textContent = `Nombre de chances : ${nbChances}`);

    if(nbChances <= 3 && aide === true){
      aideLabel.textContent = `Indice : ${clue}`;
  }
}

/**
 * * affichage d'une pop up de fin de jeu récapitulant 
 * * son score actuel/nbMots ainsi que si il vient de gagner ou non
 * * Et reset les valeurs de certains champs
 */

function finJeu(gagne, mot, btnValider) {
  nbMots++;
  btnValider.disabled = true;
  if (gagne) {
    Swal.fire(
      "Bien jouer !",
      `Tu as trouver le mot ${mot} avec ${
        10 - nbChances
      } erreurs. Ton score est de ${score} / ${nbMots}`,
      "success"
    );
  } else {
    Swal.fire("Dommage !", `Le mot était : ${mot}`, "error");
  }
  resetValue();
  lancement();
}

/**
 * * à chaque lettreBonne on la stocke dans un tableau et
 * * on l'affiche à l'écran pour que l'user sache ce qu'il
 * * a déjà jouer
 */
function affichageLettreRestante(lettreTape) {
  let historiqueElement = document.querySelector("#historiqueListe");

  for (let i = 0; i < lettreRestante.length; i++) {
    lettreTape = lettreTape.toUpperCase();
    if (lettreTape === lettreRestante[i]) {
      lettreRestante.splice(i, 1);
      break;
    }
  }

  console.log(lettreRestante);
  historiqueElement.textContent =
    "Lettre restante : " + lettreRestante;
}

function creationHistorique(lettreTape) {
  let lettreDejaPresente = false; // Variable pour suivre si la lettre tapée est déjà présente dans l'historique.

  for (let i = 0; i < historique.length; i++) {
    lettreTape = lettreTape.toLowerCase();
    if (lettreTape === historique[i]) {
      console.log("lettre déjà dans l'historique");
      lettreDejaPresente = true;
      break;
    }
  }

  if (!lettreDejaPresente) {
    historique.push(lettreTape); // Ajoutez la lettre à l'historique uniquement si elle n'est pas déjà présente.
  }

  console.log(historique);
}


/**
 * * permet de générer les images qui change en fonction 
 * * du nombre de chances de l'user
 */

function generatedImages() {
  let images = document.querySelector("#image");
  switch (nbChances) {
    case 9:
      images.src = "/dist/images/poteau1.png";
      break;
    case 8:
      images.src = "/dist/images/poteau2.png";
      break;
    case 7:
      images.src = "/dist/images/poteau3.png";
      break;
    case 6:
      images.src = "/dist/images/poteau4.png";
      break;
    case 5:
      images.src = "/dist/images/poteau5.png";
      break;
    case 4:
      images.src = "/dist/images/poteau6.png";
      break;
    case 3:
      images.src = "/dist/images/poteau7.png";
      break;
    case 2:
      images.src = "/dist/images/poteau8.png";
      break;
    case 1:
      images.src = "/dist/images/poteau9.png";
    case 0: 
      images.src = "/dist/images/poteau10.png";
  }
}

/**
 * * Test unitaire qui vérifie si le caractère rentré par l'user est bien :
 * * de type String, que le champ ne soit pas vide, qu'il n'y est pas plus d'un seul 
 * * caractère et que la lettre n'est pas déjà été utilisé
 */
function verificationInput(lettreTape, btnValider) {
  btnValider.disabled = true;

  if (
    isVoidInput(lettreTape) ||
    !isStringOnlyLetters(lettreTape) ||
    !isOnlyOneCharacter(lettreTape) ||
    isLetterUsed(lettreTape, btnValider)
  ) {
    btnValider.disabled = true;
  } else {
    btnValider.disabled = false;
  }
}

function isVoidInput(value) {
  return value.length === 0;
}

function isOnlyOneCharacter(value) {
  return value.length === 1;
}

function isStringOnlyLetters(value) {
  let regex = new RegExp("[a-zA-Z]+$");
  return typeof value === "string" && regex.test(value);
}

function isLetterUsed(value, btnValider) {
  value = value.toLowerCase();
  let count = 0;
  for (let i = 0; i < historique.length; i++) {
    if (historique[i] === value) {
      btnValider.disabled = true;
      count++;
    } else {
      btnValider.disabled = false;
    }
  }
  return count > 0;
}
