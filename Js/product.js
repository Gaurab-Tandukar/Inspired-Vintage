// Accessing element from HTML
const addToCart = document.querySelectorAll(".add_to_cart");
const cartPopup = document.querySelector(".cart_popup");
const body = document.querySelector("body");
const section = document.querySelector("#main_content");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart_container");
const buy = document.querySelector(".buy");
let count = 0;

//writing code for cart popup
addToCart.forEach((e) => {
    e.addEventListener("click", () => {
        // code to appear added to cart popup
        cartPopup.classList.remove("cart_popup");
        cartPopup.classList.add("cart_popup_block");
        section.classList.add("dull");

        // code to disappear added to cart popup
        body.addEventListener("mouseover", () => {
            cartPopup.classList.add("cart_popup");
            cartPopup.classList.remove("cart_popup_block");
            section.classList.remove("dull");
        });
        //code to add product in cart
        productAdded();
    });
})
// code to add function in cart button

cart.addEventListener("click", () => {
    if (cartContainer.classList.contains("cart_container_display")) {
        cartContainer.classList.remove("cart_container_display");
        cartContainer.classList.add("cart_container");
    } else {
        cartContainer.classList.remove("cart_container");
        cartContainer.classList.add("cart_container_display");
    }
});

// code to add product in cart
function productAdded() {
    count++;
        const cartContainerText = document.querySelector(".cart_container_text").style.display = "none";
        const newProduct = document.createElement('div');
        newProduct.classList.add('box');
        newProduct.textContent = `${count} Product Added`;
        cartContainer.appendChild(newProduct);
        buy.style.display = "block";
}

// code to run buy button in cart container
buy.addEventListener("click", () => {
    alert("Your Purchase is sucessful.");
});