const cartItems = document.getElementById("cartItems");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItems.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    Your cart is empty
                </td>
            </tr>
        `;

        document.getElementById("grandTotal").textContent = "0";
        return;
    }

    cart.forEach((product, index) => {

        let total = product.price * product.quantity;

        grandTotal += total;

        cartItems.innerHTML += `
            <tr>

                <td class="cart-info">
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                </td>

                <td>$${product.price}</td>

                <td>
                    <button class="qty-btn" onclick="decrease(${index})">-</button>

                    <span>${product.quantity}</span>

                    <button class="qty-btn" onclick="increase(${index})">+</button>
                </td>

                <td>$${total}</td>

                <td>
                    <button class="delete-btn" onclick="removeItem(${index})">
                        Delete
                    </button>
                </td>

            </tr>
        `;
    });

    document.getElementById("grandTotal").textContent = grandTotal;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function increase(index) {

    cart[index].quantity++;

    displayCart();
}

function decrease(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }

    displayCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}

displayCart();

const icon = document.getElementById("icon")
icon.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
    
});