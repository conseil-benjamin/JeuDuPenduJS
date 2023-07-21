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
    lettre.textContent = " ";
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

  let mot = document.querySelector("#textePendu");
  // ...

  // ensuite on vérifie si la lettre rentré dans l'input est correcte
  // faire une fonction qui vérifie l'input ( pas plus d'un caractère, cela doit etre uniquement une lettre)
  // a faire

  let lettreTape = lettre.value;
  console.log(lettreTape);
  console.log(motRandomRevele);

  for (let i = 0; i < motRandomRevele.length; i++) {
    if (lettreTape === motRandomRevele[i]) {
      motRandom = motRandom.replaceAt(i * 2, motRandomRevele[i]); // marche également avec lettreTape
      lettreBonne = true;
    } else {
      lettreBonne = false;
    }
  }

  console.log(motRandom);

  mot.textContent = motRandom;
  console.log(motRandom);

  // vérification si le mot écrit par l'user === motRandomRevele
  // on vérifie si le joueur à encore une chance ou non
  if (motRandom === motRandomRevele) {
    gagne = true;
    finJeu(gagne, motRandomRevele);
  } else if (nbChances === 0) {
    gagne = false;
    finJeu(gagne, motRandomRevele);
  } else {
    if (!lettreBonne) {
      nbChances--;
      let message = "Nombres de chances : " + nbChances + "<br>Mauvaise lettre";
      document.getElementById("nbChances").innerHTML = message;
    } else {
      nbChancesElement.textContent = "Nombres de chance : " + nbChances;
    }
  }

  console.log(motRandom);

  // régler problème doublon ou plus pour une lettre si cela n'est pas régler de base
}

function finJeu(gagne, mot) {
  if (gagne) {
    alert("Félicitations vous avez trouvez le mot :" + mot);
  } else {
    alert("Perdu ! Le mot était : " + mot);
  }
}
