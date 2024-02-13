// Menu mobile
let botao = document.querySelector('.abrir');
let menu = document.querySelector('.menu-mobile');

botao.addEventListener('click', function(){
    if(menu.classList.contains('abrir-menu')) {
        menu.classList.remove('abrir-menu');
    } else {
        menu.classList.add('abrir-menu');
    }
});