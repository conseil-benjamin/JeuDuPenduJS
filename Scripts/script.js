let motGenere = false;
let motRandom;
let indexMotRandom;
let motRandomRevele;
let motEnCours;
let score = 0;
let nbChances = 8;
let nbMots = 0;
let nbMotsGenere = 0;

async function logWords() {
  const response = await fetch(
    "https://words-api-v1.onrender.com/api/v1/words"
  );
  const wordsRequest = await response.json();
  return wordsRequest;
}

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

document.addEventListener("DOMContentLoaded", () => {
  let images = document.querySelector("#image");
  let btnRejouer = document.querySelector("#btn-rejouer");

  if (btnRejouer) {
    btnRejouer.addEventListener("click", () => {
      document.querySelector("#lettre").value = "";
      motGenere = false;
      nbChances = 8;
      historique = [];
      images.src = "images/start.png";
      lancement();
    });
  } else {
    console.error("L'élément avec l'ID 'btn-rejouer' n'a pas été trouvé.");
  }
});

function lancement() {
  console.log(
    "---------------------------------------------------"
  );

  let words = logWords();
  console.log(words);

  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "block";

  let historique = document.querySelector(".historique");
  historique.style.display = "block";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";

  let mot = document.querySelector("#textePendu");

  if (!motGenere) {
    let indexRandom = motsCaches[Math.floor(Math.random() * motsCaches.length)];
    motRandom = indexRandom.mot;
    let isMotGenerated = indexRandom.generated;
    // pour get la difficulté du mot :
    // let difficulte = indexRandom.difficulte;
    // faire un switch case pour en fonction de la difficulte afficher le texte d'une autre couleur
    console.log(isMotGenerated);
    if (isMotGenerated) {
      console.log("????????????????????????????????????????????????");
      lancement();
    } else {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      indexMotRandom = motsCaches.findIndex((objet) => objet.mot === motRandom);
      motRandomRevele = mots[indexMotRandom];
      motEnCours = motRandom; // Initialisez le motEnCours avec le motRandom généré
      nbMotsGenere++;
      console.log(nbMotsGenere);
      isMotGenerated = true;
      console.log(isMotGenerated);
      mot.textContent = motEnCours;
    }
  }

  console.log(motRandomRevele);
  motGenere = true;

  jeu(motEnCours, motRandomRevele);
}

function jeu(motRandom, motRandomRevele) {
  let lettre = document.querySelector("#lettre");
  let lettreBonne = false;
  let nbChancesElement = document.querySelector("#nbChances");
  let btnValider = document.querySelector("#btn-valider");
  let mot = document.querySelector("#textePendu");
  let lettreTape = lettre.value;
  let count = 0;

  btnValider.disabled = true;

  lettre.addEventListener("input", () => {
    let lettreTape = lettre.value;
    verificationInput(lettreTape, btnValider);
  });

  // ne marche pas pour l'instant
  btnValider.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      lancement();
    }
  });

  for (let i = 0; i < motEnCours.length; i++) {
    if (lettreTape === motRandomRevele[i]) {
      motEnCours = motEnCours.replaceAt(i * 2, motRandomRevele[i]); // marche également avec lettreTape
      count++;
      lettreBonne = true;
    }
  }
  mot.textContent = motEnCours;

  count === 0 ? (lettreBonne = false) : (lettreBonne = true);

  console.log(isLetterUsed(lettreTape, btnValider));
  console.log(lettreBonne);
  creationHistorique(lettreTape);

  // affichage des différents paragraphes
  nbChancesElement.textContent = `Nombres de chance : ${nbChances}`;
  document.querySelector("#score").innerHTML = `Score : ${score} / ${nbMots}`;

  isVoidInput(lettreTape)
    ? console.log("Début")
    : isEndGameOrNot(btnValider, motRandomRevele, lettreBonne);
}

function isEndGameOrNot(btnValider, motRandomRevele, lettreBonne) {
  let nbChancesElement = document.querySelector("#nbChances");
  let motSansEspace;
  let gagne = false;
  let message = "";
  document.querySelector("#lettre").value = "";
  document.querySelector("#score").innerHTML = `Score : ${score} / ${nbMots}`;
  motSansEspace = motEnCours.replace(/\s/g, "");

  motSansEspace === motRandomRevele
    ? ((gagne = true), score++, finJeu(gagne, motRandomRevele, btnValider))
    : nbChances === 0
    ? ((gagne = false), finJeu(gagne, motRandomRevele, btnValider))
    : !lettreBonne
    ? (nbChances--,
      generatedImages(),
      // implémenter if (nbChances === 0) pour regler probleme de nb erreurs
      (message = "Nombres de chances : " + nbChances + "<br>Mauvaise lettre"),
      (document.getElementById("nbChances").innerHTML = message))
    : (nbChancesElement.textContent = `Nombres de chance : ${nbChances}`);
}

function finJeu(gagne, mot, btnValider) {
  let images = document.querySelector("#image");
  nbMots++;
  historique = [];
  btnValider.disabled = true;
  motGenere = false;
  if (gagne) {
    Swal.fire(
      "Bien jouer !",
      `Tu as trouver le mot ${mot} avec ${
        8 - nbChances
      } erreurs. Ton score est de ${score} / ${nbMots}`,
      "success"
    );
  } else {
    Swal.fire("Dommage !", `Le mot était : ${mot}`, "error");
  }
  images.src = "/JeuDuPenduJS/images/start.png";
  nbChances = 8;
  lancement();
}

function creationHistorique(lettreTape) {
  console.log(lettreTape);
  let historiqueElement = document.querySelector("#historiqueListe");
  let lettreDejaPresente = false; // Variable pour suivre si la lettre tapée est déjà présente dans l'historique.

  for (let i = 0; i < historique.length; i++) {
    if (lettreTape === historique[i]) {
      console.log("lettre déjà dans l'historique");
      lettreDejaPresente = true;
      break;
    }
  }

  if (!lettreDejaPresente) {
    historique.push(lettreTape);
  }

  console.log(historique);
  historiqueElement.textContent =
    "Historique des lettres utilisés : " + historique.join(" , ");
}

function generatedImages() {
  let images = document.querySelector("#image");
  switch (nbChances) {
    case 8:
      // mettre l'image de début
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
      break;

    //...
  }
}

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
  return value.length === 0;
}

function isOnlyOneCharacter(value) {
  return value.length === 1;
}

function isStringOnlyLetters(value) {
  let regex = new RegExp("[a-z]+$");
  return typeof value === "string" && regex.test(value);
}

function isLetterUsed(value, btnValider) {
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
