//Lorsque le bouton submit du formulaire est activé : la commande se lance
document.getElementById('contratForm').addEventListener('submit', (evt) => {
  // prevent default refresh functionality of forms
  evt.preventDefault()
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  
  const result = window.bridge.createEnfant({
    prenom: prenom,
    nom: nom,
  })
})