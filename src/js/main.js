let burger = document.querySelector('.header__burger');
let headerContent = document.querySelector('.header__content');


burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    headerContent.classList.toggle('active');
});

console.log(headerContent)