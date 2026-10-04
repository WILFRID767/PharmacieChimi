
document.addEventListener("DOMContentLoaded", () => {
    //initialize AOS
    AOS.init({
        duration: 1000, // DUREE EN LANIMATION EN MILLISECONDE
        once: true, // l'animation s'applique une seul fois et fin de partie 1
    });
})

//gestion du menu responsive
const menuToggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});