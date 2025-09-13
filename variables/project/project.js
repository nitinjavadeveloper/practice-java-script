let quantity = 5;
function showQuantity() {
  // Local variable
  const cardData = document.getElementById("cartCount");
  cardData.innerText = "" + quantity;
}

function incrementQuantity() {
  quantity = quantity + 2;
  showQuantity();
}

function decrementQuantity() {
  if (quantity > 0) {
    quantity--;
    showQuantity();
  }
}

function resetQuantity() {
  quantity = 0;
  showQuantity();
}

function addToCart() {
  quantity++;
  showQuantity();
  alert("Item added to cart. Total items: " + quantity);
}
