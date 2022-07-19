// Constant variable holding our hamburger and menu html classes
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

// Event listener toggling our hamburger menu element
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Function that will remove hamburger menu whenever a link is clicked
document.querySelectorAll(".links").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))

// Controls menu background transition whenever user is scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    })
});

// Functions that will take user to our project depending on which image in our projects section is clicked
function recipeTab() {
    window.open(
        "https://adrey1975.github.io/odin-recipes/", "_blank");
}

function rpsTab() {
    window.open(
        "https://adrey1975.github.io/Rock-Paper-Scissors/", "_blank");
}

function npcTab() {
    window.open(
        "https://adrey1975.github.io/NPC-Generator/", "_blank");
}

