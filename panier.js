// Variables pour stocker les articles et le total
let cartItems = [];
let total = 0;

// Fonction pour ajouter un article au panier
function addItem(name, price) {
  cartItems.push({ name, price });
  total += price;
  displayCart();
}

// Fonction pour retirer un article du panier
function removeItem(index) {
  total -= cartItems[index].price;
  cartItems.splice(index, 1);
  displayCart();
}

// Fonction pour afficher le panier et mettre à jour l'interface
function displayCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.price} euros`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Retirer';
    removeButton.onclick = () => removeItem(index);
    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
  });

  document.getElementById('total').textContent = total;
}

// Fonction pour simuler le paiement (à compléter selon les besoins)
function checkout() {
  // Ici tu pourrais ajouter la logique de paiement
  // Par exemple, rediriger vers une page de paiement réelle
  console.log('Paiement effectué !');
}

// Afficher le panier initialement vide
displayCart();
