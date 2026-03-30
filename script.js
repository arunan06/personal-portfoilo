// Smooth scroll for navigation links

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});


// Simple scroll animation for project cards

const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const position = card.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){
card.style.opacity = 1;
card.style.transform = "translateY(0)";
}

});

});