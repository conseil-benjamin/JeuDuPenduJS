fetch("Donnees/donnees.json")
  .then((response) => response.json())
  .then((motsJson) => {
    // Ici, vous pouvez utiliser les données JSON (motsJson)
    // Assurez-vous d'exécuter votre code ici, car cette partie est asynchrone.
    console.log(motsJson); // Par exemple, vous pouvez afficher les données JSON ici
  })
  .catch((error) => {
    // Gérez les erreurs potentielles ici
    console.error(
      "Une erreur s'est produite lors de la récupération des données JSON :",
      error
    );
  });

let motGenere = false;
let motRandom;
let indexMotRandom;
let motRandomRevele;
let motEnCours;
let score = 0;
let nbChances = 8;
let nbMots = 0;
let nbMotsGenere = 0;

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

document.addEventListener("DOMContentLoaded", () => {
  let btnRejouer = document.querySelector("#btn-rejouer");

  if (btnRejouer) {
    btnRejouer.addEventListener("click", () => {
      document.querySelector("#lettre").value = "";
      motGenere = false;
      nbChances = 10;
      historique = [];
      lancement();
    });
  } else {
    console.error("L'élément avec l'ID 'btn-rejouer' n'a pas été trouvé.");
  }
});

function lancement() {
  console.log(
    "-------------------------------------------------------------------"
  );

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
  let lettre = document.querySelector("#lettre"); // faire en sorte que ce ne se remète pas à 0
  let lettreBonne = false; // trouver un moyen de ne pas le remettre à 0
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
  // utile pour appuyer sur entrée pour valider
  btnValider.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
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
      // implémenter if (nbChances === 0) pour regler probleme de nb erreurs
      (message = "Nombres de chances : " + nbChances + "<br>Mauvaise lettre"),
      (document.getElementById("nbChances").innerHTML = message))
    : (nbChancesElement.textContent = `Nombres de chance : ${nbChances}`);
}

function finJeu(gagne, mot, btnValider) {
  nbMots++;
  historique = [];
  btnValider.disabled = true;
  motGenere = false;
  nbChances = 10;
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
