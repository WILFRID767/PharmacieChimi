//initialisation de swiper js pour le carroussel de temoinage
const testimonialSwiper = new Swiper(".swiper", {
 loop:true,
 autoplay:{
    delay:5000
 },
 pagination: {
    el: ".swiper-pagination",
    clickable: true,
 }
});