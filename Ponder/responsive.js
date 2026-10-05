let menuButton = document.querySelector('.menu-btn'); 

menuButton.addEventListener("click", function (e){
    let navLinks = document.querySelector('nav');
    navLinks.style.display = navLinks.style.display === ''? 'flex' : '';
    menuButton.classList.toggle('change');
});    
