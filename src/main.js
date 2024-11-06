const navHamburgerIcon = document.querySelector('#nav__hamburger--icon');
const navHamburger = document.querySelector('#nav__hamburger');

navHamburgerIcon.addEventListener('click', () =>{
    
    navHamburger.classList.toggle('hidden');
    
})