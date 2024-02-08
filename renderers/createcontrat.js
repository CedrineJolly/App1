document.getElementById('contratForm').addEventListener('submit', (evt) => {
  // prevent default refresh functionality of forms
  evt.preventDefault()
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const heuresLundi = document.getElementById('lundi').value;


  const result = window.bridge.createContrat({
    prenom: prenom,
    nom: nom,
    heuresLundi: heuresLundi
  })
})