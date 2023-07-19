/*
function miseEnPlace(motRandom) {
  let lettre = document.querySelector("#lettre");
  

  // vérifier si la lettre est correcte si il n'y en a pas plusieurs
  /* if(lettre != ) {

  }

  console.log(motRandom);

  // mise en place mot avec des underscore
  for (let i = 0; i < motRandom.length; i++) {
    result = motRandom.replace(i, "_");
  }
  
} 

*/

// commencement du jeu à l'appuie du bouton jouer et initialisation d'un mot pour le jeu
function lancement() {
  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "block";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";

  let mot = document.querySelector("#textePendu");

  // on affiche un mot aléatoire
  let motRandom = motsCaches[Math.floor(Math.random() * motsCaches.length)];
  let indexMotRandom = motsCaches.indexOf(motRandom);
  console.log(indexMotRandom); // marche bien
  let motRandomRevele = mots[indexMotRandom];

  mot.textContent = motRandom;

  jeu(motRandom, motRandomRevele);
}

function jeu(motRandom, motRandomRevele) {
  let lettre = document.querySelector("#lettre");

  let nbChances = 10;
  let nbChancesElement = document.querySelector("#nbChances");
  // ...

  // ensuite on vérifie si la lettre rentré dans l'input est correcte
  // faire une fonction qui vérifie l'input ( pas plus d'un caractère, cela doit etre uniquement une lettre)
  // a faire

  let lettreTape = lettre.value;
  console.log(lettreTape);
  let subStringValue = "";

  for (let i = 0; i < motRandomRevele.length; i++) {
    console.log(motRandomRevele[i]);
    if (lettreTape === motRandomRevele[i]) {
      subStringValue.substring(i, 1); //test
      console.log(subStringValue); // test
      motRandom[i] = motRandomRevele[i];
    } else {
      nbChances--;
    }
  }

  // régler problème doublon ou plus pour une lettre si cela n'est pas régler de base

  // on vérifie si le joueur à encore une chance ou non

  if (nbChances === 0) {
    finJeu(motRandom);
  } else {
    nbChancesElement.textContent = "Nombres de chances :" + " " + nbChances;
  }
}

function finJeu(mot) {
  alert("Perdu ! Le mot était : " + mot);
}
