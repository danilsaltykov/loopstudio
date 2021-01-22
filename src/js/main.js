let burger = document.querySelector('.header__burger');
let headerContent = document.querySelector('.header__content');
let body = document.body;



burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    headerContent.classList.toggle('active');
    // body.style.overflowY = 'hidden'

});


// if(body.style.overflowY === 'hidden' ) {
//     body.style.overflowY = 'visible';
// } else{
//     console.log('hello')
// }



