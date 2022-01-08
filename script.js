//------------------PAGINA INDEX.HTML-------------------------------
$(document).ready(function() {
 var botao = $('.menu-link');
 var dropDown = $('.sub-menu');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});