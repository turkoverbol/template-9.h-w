var hamburger = document.querySelector(".hamburger");
var nav__wrap = document.querySelector(".nav__wrap");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    nav__wrap.classList.toggle("is-active");
    // Do something else, like open/close menu
});