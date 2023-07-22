// commencement du jeu à l'appuie du bouton jouer et initialisation d'un mot pour le jeu
let motGenere = false;

let motRandom;
let indexMotRandom;
let motRandomRevele;

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

function lancement() {
  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "block";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";

  let lettre = document.querySelector("#lettre");

  let mot = document.querySelector("#textePendu");

  let btnRejouer = document.querySelector("#btn-rejouer");

  if (!motGenere) {
    // on affiche un mot aléatoire
    motRandom = motsCaches[Math.floor(Math.random() * motsCaches.length)];
    indexMotRandom = motsCaches.indexOf(motRandom);
    motRandomRevele = mots[indexMotRandom];
    mot.textContent = motRandom;
  }

  motGenere = true;

  btnRejouer.addEventListener("click", () => {
    lettre.innerHTML = "";
    motGenere = false;
    lancement();
  });

  jeu(motRandom, motRandomRevele);
}

function jeu(motRandom, motRandomRevele) {
  let lettre = document.querySelector("#lettre");
  let gagne = false;
  let nbChances = 10;
  let lettreBonne = false;
  let nbChancesElement = document.querySelector("#nbChances");

  let btnValider = document.querySelector("#btn-valider");

  let mot = document.querySelector("#textePendu");
  // ...
  let lettreTape = lettre.value;

  lettre.addEventListener("input", () => {
    let lettreTape = lettre.value;
    verificationInput(lettreTape, btnValider);
  });

  //verificationInput(lettre, lettreTape, btnValider);

  // ensuite on vérifie si la lettre rentré dans l'input est correcte
  // faire une fonction qui vérifie l'input ( pas plus d'un caractère, cela doit etre uniquement une lettre)
  // a faire

  for (let i = 0; i < motRandomRevele.length; i++) {
    if (lettreTape === motRandomRevele[i]) {
      motRandom = motRandom.replaceAt(i * 2, motRandomRevele[i]); // marche également avec lettreTape
      lettreBonne = true;
    } else {
      lettreBonne = false;
    }
  }

  creationHistorique(lettreTape);
  mot.textContent = motRandom;

  // vérification si le mot écrit par l'user === motRandomRevele
  // on vérifie si le joueur à encore une chance ou non
  if (motRandom === motRandomRevele) {
    gagne = true;
    finJeu(gagne, motRandomRevele, nbChances);
  } else if (nbChances === 0) {
    gagne = false;
    finJeu(gagne, motRandomRevele, nbChances);
  } else {
    console.log("test");
    if (!lettreBonne) {
      console.log("test2");
      nbChances--;
      console.log(nbChances);
      let message = "Nombres de chances : " + nbChances + "<br>Mauvaise lettre";
      document.getElementById("nbChances").innerHTML = message;
    } else {
      nbChancesElement.textContent = "Nombres de chance : " + nbChances;
    }
  }
}

function finJeu(gagne, mot, nbChances) {
  if (gagne) {
    alert(
      "Félicitations vous avez trouvez le mot :" +
        mot +
        "avec" +
        (10 - nbChances) +
        "erreur(s)"
    );
  } else {
    alert("Perdu ! Le mot était : " + mot);
  }
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
    historique.push(lettreTape); // Ajoutez la lettre à l'historique uniquement si elle n'est pas déjà présente.
  }

  console.log(historique);
  historiqueElement.textContent =
    "historique des lettres utilisés : " + historique.join(", ");
}

function verificationInput(lettreTape, btnValider) {
  btnValider.disabled = true;

  // test unitaires
  if (
    !isStringOnlyLetters(lettreTape) ||
    isVoidInput(lettreTape) ||
    !isOnlyOneCharacter(lettreTape)
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
  return value.length <= 1;
}

function isStringOnlyLetters(value) {
  let regex = new RegExp("[a-z]+$");
  return typeof value === "string" && regex.test(value);
}
