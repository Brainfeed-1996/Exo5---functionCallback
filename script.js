function salutation(nom) {
  alert("Bonjour " + nom);
}
function donneeVisiteur(callback) {
  let nomInput = prompt("Entrez votre nom");
  callback(nomInput);
}

donneeVisiteur(salutation);
