$(document).ready(function(){

    $('a').attr('target', '_blank');
    
    //paso 02
    $(".fb").prepend("<i class='fab fa-facebook-f'></i>");
    $(".in").prepend("<i class='fab fa-instagram'></i>");
    $(".tw").prepend("<i class='fab fa-twitter'></i>");
    $(".sn").prepend("<i class='fab fa-pinterest'></i>");
    $(".fba").prepend("<i class='fab fa-facebook-f'></i>");
       
    //paso 03
    $(".h2red").click(function(){
        $(this).css("color", "red");
    });

    //paso 04
    $("#last").append("<ul><li><a href='#'>link 4.a</a></li></ul>");
    $("#last").after("<li><a href='#'>link 5</a></li>");
   
});