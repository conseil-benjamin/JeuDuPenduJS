let motGenere = false;
let motRandomRevele;
let motEnCours;
let word;
let mask;
let clue;
let aide;
let score = 0;
let nbChances = 10;
let nbMots = 0;
let nbMotsGenere = 0;
let wordsAlreadyUse = [];
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
document.addEventListener("DOMContentLoaded", () => {
  let images = document.querySelector("#image");
  let btnRejouer = document.querySelector("#btn-rejouer");

  if (btnRejouer) {
    btnRejouer.addEventListener("click", () => {
      document.querySelector("#lettre").value = "";
      motGenere = false;
      nbChances = 10;
      lettreRestante = ["A","B","C","D"
                      ,"E","F","G","H","I","J","K"
                    ,"L","M","N","O","P","Q","R","S",
                    "T","U","V","W","X","Y","Z"];
      images.src = "/images/start.png";
      lancement();
    });
  } else {
    console.error("L'élément avec l'ID 'btn-rejouer' n'a pas été trouvé.");
  }
});
/**
 * * permettra si checkBox activer aide coché de donner
 * * un indice à l'utilisateur quand il lui reste peu de vie
 */
// 
function initialisation(){
  let checkbox = document.querySelector("#checkBoxId");
  let checkOrNot;
  if(checkbox){
    checkOrNot = true;
  }
  else{
    console.log("Case non coché");
    checkOrNot = false;
  }
  return checkOrNot;
}


async function lancement() {
  console.log("---------------------------------------------------");

  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "block";

  let historique = document.querySelector(".zoneHistorique");
  historique.style.display = "block";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";

  let mot = document.querySelector("#textePendu");

  let zoneSettings = document.querySelector(".zoneSettings");

  aide = false;

  if (initialisation() === true){
    console.log("case coché");
    aide = true;
  }

  let nbIterationMot = 0;

  /**
   ** récupération des mots dans la BDD via mon API
   ** et affichage d'un mot aléatoire à l'écran 
  */
  if (!motGenere) {
    const words = await fetch("https://words-api-v1.onrender.com/api/v1/words")
      .then((res) => res.json())
      .catch((error) => console.error("ERROR"));
    console.log(words);
    let wordIndex = Math.floor(Math.random() * words.length);
    let wordJson = words[wordIndex];
    mask = wordJson.mask;
    word = wordJson.word;
    clue = wordJson.clue;
    console.log(word);
    console.log(clue);
    motEnCours = mask;
    nbMotsGenere++;
    mot.textContent = motEnCours;
    wordsAlreadyUse.push(word);
    console.log(wordsAlreadyUse);
  }
  /*
  for (let i = 0; i < wordsAlreadyUse.length; i++) {
    if (word === wordsAlreadyUse[i]) {
      nbIterationMot++;
    }
  }
  console.log(nbIterationMot);
  // pour vérifier qu'un mot déjà tomber ne revienne pas
  nbIterationMot === 1
    ? lancement()
    : console.log("Iteration " + nbIterationMot);
*/
  motGenere = true;
  nbIterationMot = 0;

  jeu(word);
}

function jeu(motRandomRevele) {
  let lettre = document.querySelector("#lettre");
  let lettreBonne = false;
  let nbChancesElement = document.querySelector("#nbChances");
  let btnValider = document.querySelector("#btn-valider");
  let mot = document.querySelector("#textePendu");
  let aideLabel = document.querySelector("#aideLabel");
  let lettreTape = lettre.value;
  let count = 0;

  btnValider.disabled = true;
  /**
   * * permet de vérifier le contenu de l'input lettre
   */
  lettre.addEventListener("input", () => {
    let lettreTape = lettre.value;
    console.log(lettreTape);
    verificationInput(lettreTape, btnValider);
  });

  /**
   * * permet de valider sa lettre avec la touche "entrer"
   * ! Régler problème : lettre pas valide accepté quand même
   */
  lettre.addEventListener('keypress', function (e) {
    let lettreTape = lettre.value;
    lettreTape = lettreTape.toLowerCase();
    console.log(lettreTape);
    console.log(verificationInput(lettreTape, btnValider));
    if(!verificationInput(lettreTape, btnValider)){
      if (e.key === 'Enter') {
        lancement();
      }
    }
    else{
      console.log("Lettre ok");
    }
});

  console.log(motEnCours);
  console.log(motRandomRevele);

  // boucle pour chercher une lettre correspondant à l'input
  // dans le mot à trouver
  // si trouver remplacer par l'input à l'index qu'il faut
  for (let i = 0; i < motEnCours.length; i++) {
    if (lettreTape === motRandomRevele[i]) {
      motEnCours = motEnCours.replaceAt(i * 2, motRandomRevele[i]);
      count++;
      lettreBonne = true;
    }
  }
  // affichage du mot actualisé à l'écran
  mot.textContent = motEnCours;

  // permet de vérifier si la lettre rentré 
  // a été correct ou non
  count === 0 ? (lettreBonne = false) : (lettreBonne = true);
  creationHistorique(lettreTape);
  affichageLettreRestante(lettreTape);

  // affichage des différents paragraphes
  nbChancesElement.textContent = `Nombre de chances : ${nbChances}`;
  document.querySelector("#score").innerHTML = `Score : ${score} / ${nbMots}`;

  console.log(aide);
  if(nbChances <= 3 && aide === true){
      aideLabel.textContent = `Indice : ${clue}`;
  }

  console.log(clue);

  console.log(aideLabel.textContent);

  // permet que la logique du jeu ne joue pas un 
  // tour sans que le joueur puisse commencer
  // sinon il commence direct avec nbChances --
  isVoidInput(lettreTape)
    ? console.log("Début")
    : isEndGameOrNot(btnValider, motRandomRevele, lettreBonne);
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
       * Vérifie si après avoir décrémenter son nombre de chances est 
       * arrivé à 0, si le cas alors on appelle la fonction finJeu()
       * sinon on retourne rien
       */
      (nbChances === 0 ? ((gagne = false), finJeu(gagne, motRandomRevele, btnValider)) : null),
      // implémenter if (nbChances === 0) pour regler probleme de nb erreurs
      (message = "Nombre de chances : " + nbChances + "<br>Mauvaise lettre"),
      (document.getElementById("nbChances").innerHTML = message))
    : (nbChancesElement.textContent = `Nombre de chances : ${nbChances}`);
}

/**
 * * affichage d'une pop up de fin de jeu
 * * récapitulant son score actuel/nbMots
 * * ainsi que si il vient de gagner ou non
 */

function finJeu(gagne, mot, btnValider) {
  let images = document.querySelector("#image");
  nbMots++;
  lettreRestante = ["A","B","C","D"
                      ,"E","F","G","H","I","J","K"
                    ,"L","M","N","O","P","Q","R","S",
                    "T","U","V","W","X","Y","Z"];
  btnValider.disabled = true;
  motGenere = false;
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
  images.src = "/images/start.png";
  nbChances = 10;
  aideLabel.textContent = "";
  lancement();
}

/**
 * * à chaque lettreBonne on la stocke dans un tableau et
 * * on l'affiche à l'écran pour que l'user sache ce qu'il
 * * a déjà jouer
 * ? Pourquoi pas faire l'inverse, donc afficher les lettres qu'il n'a pas fait
 * ? L'affiche sous forme d'array de 4-5 par ligne sur la droite du jeu
 */
function affichageLettreRestante(lettreTape) {
  console.log(lettreTape);
  let historiqueElement = document.querySelector("#historiqueListe");

  for (let i = 0; i < lettreRestante.length; i++) {
    lettreTape = lettreTape.toUpperCase();
    if (lettreTape === lettreRestante[i]) {
      console.log("lettre disponible" + lettreTape);
      lettreRestante.splice(i, 1);
      break;
    }
  }

  console.log(lettreRestante);
  historiqueElement.textContent =
    "Lettre restante : " + lettreRestante;
}

function creationHistorique(lettreTape) {
  console.log(lettreTape);
  let lettreDejaPresente = false; // Variable pour suivre si la lettre tapée est déjà présente dans l'historique.

  for (let i = 0; i < historique.length; i++) {
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
      images.src = "/images/poteau1.png";
      break;
    case 8:
      images.src = "/images/poteau2.png";
      break;
    case 7:
      images.src = "/images/poteau3.png";
      break;
    case 6:
      images.src = "/images/poteau4.png";
      break;
    case 5:
      images.src = "/images/poteau5.png";
      break;
    case 4:
      images.src = "/images/poteau6.png";
      break;
    case 3:
      images.src = "/images/poteau7.png";
      break;
    case 2:
      images.src = "/images/poteau8.png";
      break;
    case 1:
      images.src = "/images/poteau9.png";
    case 0: 
      images.src = "/images/poteau10.png";
  }
}
/**
 * ! Régler problème : lettre majuscule pas accepté
 * * vérification de l'input de l'user
 * * si pas correct on désactive le btn
 */


/**
 * * Test unitaire qui vérifie si le caractère rentré par l'user est bien :
 * * de type String, que le champ ne soit pas vide, qu'il n'y est pas plus d'un seul 
 * * caractère et que la lettre n'est pas déjà été utilisé
 */
function verificationInput(lettreTape, btnValider) {
  btnValider.disabled = true;

  if (
    !isStringOnlyLetters(lettreTape) ||
    isVoidInput(lettreTape) ||
    !isOnlyOneCharacter(lettreTape) ||
    isLetterUsed(lettreTape, btnValider)
  ) {
    btnValider.disabled = true;
  } else {
    btnValider.disabled = false;
  }
}

function isVoidInput(value) {
  value = value.toLowerCase();
  return value.length === 0;
}

function isOnlyOneCharacter(value) {
  value = value.toLowerCase();
  return value.length === 1;
}

function isStringOnlyLetters(value) {
  value = value.toLowerCase();
  let regex = new RegExp("[a-z]+$");
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
