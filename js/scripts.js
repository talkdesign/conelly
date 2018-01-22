    // Scroll para menu
    $(".link-menu").on("click", function(event){

    // a animação vai ocorrer no html, body
    $('html, body').animate({

        // pega o atributo href do this (link que recebeu o click)
        // e faz a animação com velocidade 1000 para o destino do href;
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);

    // Faz com que o destino do link não vá para a url
    event.preventDefault();
});

 //Popover para exibir telefones
 var ops = {
    'html':true,    
    content: function(){
        return $('#exibetelefones').html();
    }
};

$(function(){
    $('#botaoacolchao').popover(ops)
});
$(function(){
    $('#botaodormitorio').popover(ops)
});
$(function(){
    $('#botaopapel').popover(ops)
});