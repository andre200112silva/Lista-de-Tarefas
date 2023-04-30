function verificar () {
    for (var i = 0; i < cont; i++) {

        var b = $('.checar').eq(i)

        if (b.is(":checked") == true) {  
            contC +=1
            $('.h2').eq(i).css('background','rgb(42, 238, 42)').css('border','none')

        }

        if (b.is(":checked") == false) {  
            $('h2').eq(i).css('background','white').css('border-bottom', '1px solid black')
        }
        $('.completas').html('<p class="completas1">Tarefas Completas</p> ' + contC)
        
    }

}
 
var cont = 0;
var contP = 0;
var contC = 0;
$('.button').click(() => {

    verificar()
    $('.pendentes').html('<p class="pendentes1">Tarefas Pendentes</p> ' + (cont - contC))

    if ($('.input').val() != '') {
        $('.tarefas').append('<h2 class="h2"> ' + $('.input').val() + '</h2>')
        $('.h2').eq(cont).html($('.h2').eq(cont).text() + '<input class="checar" type="checkbox" />' + '<p class="excluir"">X</p>')
        cont +=1
    }   

    var calculo = (100 / (cont / contC)) ;  
    $('.barra').css('width', calculo.toFixed(2)+'%').css('transition','1s')
    $('.porcentagem').html(calculo.toFixed(2)+'%')


    $('.total').html('<p class="total1">Total de Tarefas</p> ' + cont)
    $('.pendentes').html('<p class="pendentes1">Tarefas Pendentes</p> ' + contP)
    $('.completas').html('<p class="completas1">Tarefas Completas</p> ' + contC)
    
    $('.input').val('')
    $('.pendentes').html('<p class="pendentes1">Tarefas Pendentes</p> ' + (cont - contC))
    contC = 0;  
    if (cont <= 0) {
        
        $('.barra').css('width', '0')
        $('.porcentagem').text('0.00%')
    }

})


$('.total').html('<p class="total1">Total de Tarefas</p> ' + cont)
$('.pendentes').html('<p class="pendentes1">Tarefas Pendentes</p> ' + contP)
$('.completas').html('<p class="completas1">Tarefas Completas</p> ' + contC)



$('.tarefas').click(function () {
    
    verificar()
    $('.pendentes').html('<p class="pendentes1">Tarefas Pendentes</p> ' + (cont - contC))

    var calculo = (100 / (cont / contC)) ;
    contC = 0;  
    $('.barra').css('width', (calculo.toFixed(2))+'%').css('transition','1s')
    $('.porcentagem').text(calculo.toFixed(2)+'%')

    if (cont <= 0) {
        
        $('.barra').css('width', '0')
        $('.porcentagem').text('0.00%')
    }
})


$('.tarefas').on('click','.excluir', function(e) {
    e.target.parentNode.remove(); 
    cont -=1   
    $('.total').html('<p class="total1">Total de Tarefas</p> ' + cont)
});
