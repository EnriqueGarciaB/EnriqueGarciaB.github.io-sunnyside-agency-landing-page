const mainNav = document.querySelector('.main-nav');
const openMenu = document.querySelector('.menuIcon');

openMenu.addEventListener("click",mobileMenu);
function mobileMenu(){
    mainNav.classList.toggle("active");
}

