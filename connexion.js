const changeColorButton = document.getElementById('changeColorButton');
let colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700']; // Tableau de couleurs disponibles
let index = 0; // Index pour suivre la couleur actuelle

changeColorButton.addEventListener('click', function() {
  document.body.style.backgroundColor = colors[index]; // Change la couleur de fond
  index = (index + 1) % colors.length; // Passe à la couleur suivante dans le tableau
});
