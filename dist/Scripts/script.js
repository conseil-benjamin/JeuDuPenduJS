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
let nbChances = 8;
let nbMots = 0;
let nbRestart = 0;
let nbMotsGenere = 0;
let historique = [];
let lettreRestante = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let oldIsEasydElementChecked;
let oldisMediumElementChecked;
let oldisHardElementChecked;
let sameCheckbox;

let wordsAlreadyUse = [];

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

function resetValue() {
  document.querySelector("#lettre").value = "";
  let images = document.querySelector("#image");
  let aideLabel = document.querySelector("#aideLabel");
  motGenere = false;
  nbChances = 8;
  lettreRestante = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  historique = [];
  images.src = "/dist/images/start.png";
  aideLabel.textContent = "";
}

async function lancement() {
  let mot = document.querySelector("#textePendu");
  let checkboxClue = document.querySelector("#checkBoxAide");

  // check si une difficulté à changer
  // evite d'appeler l'api à chaque nouveau mot
  // donc plus rapide

  let wordsEasyElement = document.querySelector("#checkboxFacileInput");
  let wordsMediumElement = document.querySelector("#checkboxMoyenInput");
  let wordsHardElement = document.querySelector("#checkboxDifficilenInput");

  let isEasyElementCheckedAct = wordsEasyElement.checked;
  let isMediumElementCheckedAct = wordsMediumElement.checked;
  let isHardElementCheckedAct = wordsHardElement.checked;

  if (
    isEasyElementCheckedAct != oldIsEasydElementChecked ||
    isMediumElementCheckedAct != oldisMediumElementChecked ||
    isHardElementCheckedAct != oldisHardElementChecked
  ) {
    oldIsEasydElementChecked = isEasyElementCheckedAct;
    oldisMediumElementChecked = isMediumElementCheckedAct;
    oldisHardElementChecked = isHardElementCheckedAct;
    sameCheckbox = false;
  } else {
    sameCheckbox = true;
  }

  checkboxClue.checked ? (aide = true) : (aide = false);
  /**
   ** récupération des mots dans la BDD via mon API
   ** et affichage d'un mot aléatoire à l'écran
   */
  let motAlreadyUse = true;

  if (!motGenere) {
    try {
      if (nbMotsGenere === 0 || sameCheckbox === false) {
        wordsAlreadyUse = [];
        words = await getWords();
      }
      while (motAlreadyUse === true) {
        let wordIndex = Math.floor(Math.random() * words.length);
        let wordJson = words[wordIndex];
        mask = wordJson.mask;
        word = wordJson.word;
        clue = wordJson.clue;
        difficulty = wordJson.difficulty;
        motEnCours = mask;
        mot.textContent = motEnCours;
        if (words.length === wordsAlreadyUse.length) {
          wordsAlreadyUse = [];
          motAlreadyUse = false;
        } else if (wordsAlreadyUse.includes(word)) {
          motAlreadyUse = true;
        } else {
          motAlreadyUse = false;
        }
      }
    } catch (error) {
      console.error("Une erreur est survenue : ", error);
    }
  }

  nbMotsGenere++;
  motGenere = true;
  wordsAlreadyUse.push(word);
  jeu(word);
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
  let gagne = false;

  btnValider.disabled = true;

  /**
   ** boucle pour chercher une lettre correspondant à l'input
   ** dans le mot à trouver si trouver remplacer par l'input à l'index qu'il faut
   */

  if (lettreTape === word) {
    score++;
    gagne = true;
    finJeu(gagne, word, btnValider);
  } else {
    for (let i = 0; i < motEnCours.length; i++) {
      lettreTape = lettreTape.toLowerCase();
      if (lettreTape === word[i]) {
        motEnCours = motEnCours.replaceAt(i * 2, word[i]);
        count++;
        lettreBonne = true;
      }
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
      nbChances === 0
        ? ((gagne = false), finJeu(gagne, motRandomRevele, btnValider))
        : null,
      (message = "Nombre de chances : " + nbChances),
      (document.getElementById("nbChances").innerHTML = message))
    : (nbChancesElement.textContent = `Nombre de chances : ${nbChances}`);

  if (nbChances <= 3 && aide === true) {
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
      "Bien joué !",
      `Tu as trouver le mot ${mot} avec ${
        8 - nbChances
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
  historiqueElement.innerHTML =
    "<u>Lettre restante :</u> <br/> <br/>" + lettreRestante;
}

function creationHistorique(lettreTape) {
  let lettreDejaPresente = false; // Variable pour suivre si la lettre tapée est déjà présente dans l'historique.

  for (let i = 0; i < historique.length; i++) {
    lettreTape = lettreTape.toLowerCase();
    if (lettreTape === historique[i]) {
      lettreDejaPresente = true;
      break;
    }
  }

  if (!lettreDejaPresente) {
    historique.push(lettreTape); // Ajoutez la lettre à l'historique uniquement si elle n'est pas déjà présente.
  }
}

/**
 * * permet de générer les images qui change en fonction
 * * du nombre de chances de l'user
 */

function generatedImages() {
  let images = document.querySelector("#image");
  switch (nbChances) {
    case 7:
      images.src = "/dist/images/poteau1.png";
      break;
    case 6:
      images.src = "/dist/images/poteau2.png";
      break;
    case 5:
      images.src = "/dist/images/poteau3.png";
      break;
    case 4:
      images.src = "/dist/images/poteau4.png";
      break;
    case 3:
      images.src = "/dist/images/poteau5.png";
      break;
    case 2:
      images.src = "/dist/images/poteau7.png";
      break;
    case 1:
      images.src = "/dist/images/poteau9.png";
      break;
    case 0:
      images.src = "/dist/images/poteau10.png";
  }
}
