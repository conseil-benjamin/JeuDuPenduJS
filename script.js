function validationLettre(motRandom) {
  let lettre = document.querySelector("#lettre");
  let mot = document.querySelector("#textePendu");

  // vérifier si la lettre est correcte si il n'y en a pas plusieurs
  /* if(lettre != ) {

  }
  */

  console.log(motRandom);

  // mise en place mot avec des underscore
  for (let i = 0; i < motRandom.length; i++) {
    result = motRandom.replace(i, "_");
  }
  mot.textContent = result;
}

// commencement du jeu à l'appuie du bouton jouer
function lancement() {
  let zoneJeu = document.querySelector(".zoneJeu");

  zoneJeu.style.display = "block";
  jeu();
}

function jeu() {
  let lettre = document.querySelector("#lettre");
  console.log(lettre.value);

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";
  // on affiche un mot aléatoire
  let motRandom = motsCachés[Math.floor(Math.random() * motsCachés.length)];
  // ...

  // ensuite on vérifie si la lettre rentré dans l'input est correcte
  validationLettre(motRandom);

  // ... Jeu avec soustraction de point affichage des lettres etc ...

  // on vérifie si le joueur à encore une chance ou non
  let nbChances = motRandom.length / 2 + 2;
  let nbChancesElement = document.querySelector("#nbChances");

  if (nbChances === 0) {
    finJeu(motRandom);
  } else {
    nbChancesElement.textContent = "Nombres de chances :" + " " + nbChances;
  }
}

function finJeu(mot) {
  alert("Perdu ! Le mot était : " + mot);
}
