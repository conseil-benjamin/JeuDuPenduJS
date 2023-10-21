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
  lettre.addEventListener("keypress", function (e) {
    let lettreTape = lettre.value;
    if (
      (!isVoidInput(lettreTape) &&
        isOnlyOneCharacter(lettreTape) &&
        !isLetterUsed(lettreTape, btnValider) &&
        isStringOnlyLetters(lettreTape)) ||
      lettreTape === word
    ) {
      if (e.key === "Enter") {
        jeu();
      }
    } else {
      btnValider.disabled = true;
    }
  });
});
