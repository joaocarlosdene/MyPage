//------------------PAGINA INDEX.HTML-------------------------------
$(document).ready(function() {
 var botao = $('.menu-link');
 var dropDown = $('.sub-menu');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

/*--------------------MENU RESPONSIVO--------------------------------*/

let show = true

const menuSection = document.querySelector(".menu-section")
const hamburguer = menuSection.querySelector(".hamburguer")

hamburguer.addEventListener("click", function(){
    menuSection.classList.toggle("on", show)
    show = !show
})