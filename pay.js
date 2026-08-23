let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("orderItems");
const orderTotal = document.getElementById("orderTotal");
const whatsappBtn = document.getElementById("whatsappBtn");

function displayOrder() {
    orderItems.innerHTML = "";

    let grandTotal = 0;

    cart.forEach(function(product) {

        const quantity = product.quantity || 1;

        const total = Number(product.price) * quantity;

        grandTotal += total;

        const item = document.createElement("div");

        item.classList.add("order-item");

        item.innerHTML = `
            <p>${product.name} (x${quantity})</p>
            <p>$${total.toLocaleString()}</p>
        `;

        orderItems.appendChild(item);
    });

    orderTotal.textContent =
        `₦${grandTotal.toLocaleString()}`;
}
displayOrder();



whatsappBtn.addEventListener("click", function () {
    const fullName = document.querySelector('input[name="fullName"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const whatsapp = document.querySelector('input[name="WhatsApp"]').value.trim();
    const address = document.getElementById("textarea").value.trim();
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (whatsapp === "") {
        alert("Please enter your WhatsApp number.");
        return;
    }
    if (address === "") {
        alert("Please enter your delivery address.");
        return;
    }
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "🛍️ *NEW ORDER* 🛍️\n\n";

    message += "*CUSTOMER DETAILS*\n";
    message += `Name: ${fullName}\n`;
    message += `Email: ${email}\n`;
    message += `WhatsApp: ${whatsapp}\n`;
    message += `Delivery Address: ${address}\n\n`;

    message += "*ORDER DETAILS*\n";

    let grandTotal = 0;

    cart.forEach(function (product) {

        const quantity = product.quantity || 1;
        const total = Number(product.price) * quantity;

        grandTotal += total;

        message += `• ${product.name} (x${quantity}) - ₦${total.toLocaleString()}\n`;
    });

    message += `\n*TOTAL: ₦${grandTotal.toLocaleString()}*\n`;
    message += "\nDelivery fee is paid on delivery.";

    const phoneNumber = "2348145128207";
    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});

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