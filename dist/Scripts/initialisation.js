/**
 * * permet d'initialiser tout ce qu'il faut avant que le joueur commence à jouer
 */
//

function initialisation() {
  let rules = document.querySelector(".rules");
  rules.style.display = "none";

  let zoneJeu = document.querySelector(".zoneJeu");
  zoneJeu.style.display = "block";

  let historique = document.querySelector(".zoneHistorique");
  historique.style.display = "block";

  let btnJouer = document.querySelector("#btn-Jouer");
  btnJouer.style.display = "none";

  let zoneSettings = document.querySelector(".zoneSettings");
  zoneSettings.style =
    " display: flex; align-items: center; justify-content: center; padding: 2em; margin: 3em; width= 20%";

  let btnBackHomePage = document.querySelector("#backHomePageID");
  btnBackHomePage.style.display = "block";

  let checkboxElement = document.querySelector(".checkBoxElements");
  checkboxElement.style.display = "block";

  lancement();
}

function retourPageAcueil() {
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
