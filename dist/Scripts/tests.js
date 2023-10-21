/**
 * * Test unitaire qui vérifie si le caractère rentré par l'user est bien :
 * * de type String, que le champ ne soit pas vide, qu'il n'y est pas plus d'un seul
 * * caractère et que la lettre n'est pas déjà été utilisé
 */
function verificationInput(lettreTape, btnValider) {
  btnValider.disabled = true;

  if (
    (!isVoidInput(lettreTape) &&
      isStringOnlyLetters(lettreTape) &&
      isOnlyOneCharacter(lettreTape) &&
      !isLetterUsed(lettreTape, btnValider)) ||
    lettreTape === word
  ) {
    btnValider.disabled = false;
  } else {
    btnValider.disabled = true;
  }
}

function isVoidInput(value) {
  return value.length === 0;
}

function isOnlyOneCharacter(value) {
  return value.length === 1;
}

function isStringOnlyLetters(value) {
  let regex = new RegExp("[a-zA-Z]+$");
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
