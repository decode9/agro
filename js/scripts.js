$('.scrollTop').click(function(){
    alert($(window).scrollTop() + " px");
})
function focusTarget(selection, target){
    $(selection).click(function(){
        $('html,body').animate({
            scrollTop: $(target).offset().top},
            'slow');
    })
}
function redirect(selection, target){
    $(selection).click(function(){
        window.location.replace(target);
    })
}

$(document).ready(function(){
    $('.WelcomeFlag').slideDown(800);
    $('.welcomeImg').delay(850).fadeIn(600);
    $('.welcomeTitle').delay(1450).fadeIn(600);

    var altura = $('.header').offset().top;

    $('.country').hover(function(){
        if($(this).next('.exportList').hasClass('show')){
            $(this).next('.exportList').removeClass('show');
        }else{
            $(this).next('.exportList').addClass('show');
        }
    })
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
           $('.header').css('position', 'fixed');
           $('.logoMenu').fadeIn(400);
        } else {
           $('.header').css('position', 'relative');
           $('.logoMenu').fadeOut(400);
        }
   });
   focusTarget('#about', '.thirdContainer');
   redirect('#index', '/');
   focusTarget('#market', '.sixContainer');
   focusTarget('#contact', '.fiveContainer');
});
