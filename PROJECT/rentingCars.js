let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
 
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active"); 
}

const sr= ScrollReveal({
    distance: '60px',
    duration: 2300,
    delay: 300,
    reset: true
})

sr.reveal('.text',{delay:200, origin:'top'})
sr.reveal('.form-container form',{delay:700, origin:'left'})
sr.reveal('.heading',{delay:800, origin:'top'})
sr.reveal('.ride-container .box',{delay:500, origin:'top'})
sr.reveal('.service-container .box',{delay:500, origin:'top'})
sr.reveal('.about-container .box',{delay:500, origin:'top'})
sr.reveal('.review-container .box',{delay:500, origin:'top'})
sr.reveal('.newsletter .box',{delay:300, origin:'bottom'})
