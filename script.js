let cart = [];
let total = 0;

function viewMenu(restaurantName) {
    document.getElementById('menuTitle').innerText = restaurantName + " Menu";
    document.getElementById('restaurants').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((cartItem, index) => {
        cartItems.innerHTML += `<div>${cartItem.item} - $${cartItem.price} <button onclick="removeFromCart(${index})">Remove</button></div>`;
    });
    document.getElementById('totalPrice').innerText = 'Total: $' + total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function placeOrder() {
    if (cart.length > 0) {
        alert('Order placed successfully!');
        cart = [];
        total = 0;
        updateCart();
        document.getElementById('restaurants').style.display = 'block';
        document.getElementById('menu').style.display = 'none';
    } else {
        alert('Your cart is empty!');
    }
}
