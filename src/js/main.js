let burger = document.querySelector('.header__burger');
let headerContent = document.querySelector('.header__content');
let body = document.body;



burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    headerContent.classList.toggle('active');
    body.classList.toggle('hidden');

});






