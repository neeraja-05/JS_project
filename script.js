let cart = [];

function addToCart(name, price) {
  const item = cart.find(p => p.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price * item.qty;

    cartItems.innerHTML += `
      <li>
        ${item.name} (${item.qty})
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
  });

  total.innerText = sum;
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  displayCart();
}
