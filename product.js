let products = [];
fetch("product.json")
    .then(res => res.json())
    .then(productsArray => {
        products = productsArray;
        console.log(productsArray);
        const productList = document.getElementById("productList");
        
        productsArray.forEach((product, index) => {
            let div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <div class="rating">${createStars(product.rating)}</div>
                <p>${product.price}</p>
                <p>${product.available}</p>
                <a href="#" class="cart" onclick="addToCart(event, ${index})">${product.button}</a>
            
            `;
            productList.appendChild(div);
        });
    });

function addToCart(event, index) {

    event.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = products[index];

    let existing = cart.find(item => item.name === product.name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");
}




function createStars(rating) {
    let stars = "";
    
    for(let i = 1; i <= 5; i++){
        if (i <= rating) {
            stars += `<i class="fa-solid fa-star active"></i>`;
        }else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
        
    }
    return stars;
}
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

// CARTSSS
