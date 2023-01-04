$(document).ready(main);

var contador = true;

function main() {
    $('.menu_bar').click(function() {
        if(contador == true){
            $('.navegator nav').animate({
                left: '0'
            });
            contador = false;
        }else{
            contador = true;
            $('.navegator nav').animate({
                left: '-100%'
            });
        }
    });

    $('.navegator').click(function() {
        if(contador == true){
            $('.navegator nav').animate({
                left: '0'
            });
            contador = false;
        }else{
            contador = true;
            $('.navegator nav').animate({
                left: '-100%'
            });
        }
    });

}