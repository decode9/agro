

$(document).ready(function(){
    $('.WelcomeFlag').slideDown(800);
    $('.welcomeImg').delay(850).fadeIn(600);
    $('.welcomeTitle').delay(1450).fadeIn(600);

    $('.scrollTop').click(function(){
        alert($(window).scrollTop() + " px");
    })

    function contactForm(button){
        $(button).click(function(){
            jQuery.validator.addMethod("lettersonly", function(value, element) {
                return this.optional(element) ||/^[a-zA-Z\s]*$/i.test(value);
            }, "Letters only please");
            jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
                phone_number = phone_number.replace(/\s+/g, "");
                return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/^[0-9]*$/);
            }, "Please specify a valid phone number");
            $('.contact').validate({
                rules: {
                    name:{
                        required: true,
                        minlength: 2,
                        lettersonly: true,
                    },

                    email:{
                        required: true,
                        minlength: 3,
                        email: true,
                    },
                    phone:{
                        required: true,
                        minlength: 6,
                        phoneUS: true,
                    },
                    message:{
                        required: true,
                        minlength: 8,
                    }
                },
                messages:{
                    name: "Please introduce a valid Name, minimum 3 letters",
                    email: "Please introduce a valid Email, minimum 3 letters",
                    phone: "Please introduce a valid Phone Number, minimun 6 digits",
                    message: 'Please write at least 8 characters',
                },
            })
            if($('.contact').valid()){
                name = $('#name').val();
                email = $('#email').val();
                phone = $('#phone').val();
                message = $('#message').val();
                $.ajax({
                    url: 'php/mail.php',
                    type: 'POST',
                    dataType: "json",
                    data: {name: name, email: email, phone: phone, message: message},
                    success: function(data){
                        $('.formContact').append('<div class="success">Your message was send with success</div>');
                    },
                    error: function(){
                        $('.formContact').append('<div class="error">An error was ocurred please try again later.</div>');
                    }
                })
            }
        })
    }

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

    var altura = $('.header').offset().top;

    $('.country').hover(function(){
        if($(this).next('.exportList').hasClass('show')){
            $(this).next('.exportList').removeClass('show');
        }else{
            $(this).next('.exportList').addClass('show');
        }
    })

    $('.ProductImg').hover(function(){
        if($(this).children('.focusProduct').hasClass('show')){
            $(this).children('.focusProduct').removeClass('show');
        }else{
            $(this).children('.focusProduct').addClass('show');
        }
        if($(this).children('img').hasClass('zoom')){
            $(this).children('img').removeClass('zoom');
        }else{
            $(this).children('img').addClass('zoom');
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

    slideIndex = 0;

    function plusSlides(n) {
        passSlides(slideIndex += n);
    }

    function passSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex> slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 10000); // Change image every 2 seconds
    }

    function pass(button){
        $(button).click(function(){
            if(button == '.next'){
                plusSlides(1);
            }else{
                plusSlides(-1);
            }

        })
    }
    function closeModal(button,modal){
        button.click(function(){
            $(modal).remove();
        })

    }

    function ProductModal(button){
        $(button).click(function(){
            product = $(this).prev('.textProduct').text();

            switch (product) {
                case "Asparragus":
                    img = $('<img src="img/products/asparragus.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Asparagus. White/Green <br/> Frozen Asparagus. White/Green <br/> Canned Asparagus White/Green</li> <li>Season: January/December <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Lower Countries: 37%</li><li>United States: 27%</li><li>Spain: 18%</li><li>United Kingdom: 10%</li><li>Chile: 5%</li><li>Costa Rica: 1%</li><li>Canada: 1%</li><li>Others: 1%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>Lower Countries: 39%</li><li>United States: 28%</li><li>Spain: 17%</li><li>United Kingdom: 10%</li><li>Chile: 4%</li><li>Costa Rica: 1%</li><li>Canada: 1%</li><li>Others: 1%</li></ul>');
                    break;
                case "Avocados":
                img = $('<img src="img/products/avocado.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Avocado</li> <li>Season: February/September <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Lower Countries: 37%</li><li>United States: 27%</li><li>Spain: 18%</li><li>United Kingdom: 10%</li><li>Chile: 5%</li><li>Costa Rica: 1%</li><li>Canada: 1%</li><li>Others: 1%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>Lower Countries: 39%</li><li>United States: 28%</li><li>Spain: 17%</li><li>United Kingdom: 10%</li><li>Chile: 4%</li><li>Costa Rica: 1%</li><li>Canada: 1%</li><li>Others: 1%</li></ul>');
                    break;
                case "BlueBerries":
                    img = $('<img src="img/products/bluberrie.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Blueberries</li> <li>Season: August/March <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>United States: 58%</li><li>Lower Countries: 26%</li><li>United Kingdom: 13%</li><li>Hong Kong: 1%</li><li>Singapore: 1%</li><li>Spain: 0.4%</li><li>Canada: 0.3%</li><li>Others: 1%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>United States: 57%</li><li>Lower Countries: 27%</li><li>United Kingdom: 13%</li><li>Hong Kong: 1%</li><li>Singapore: 1%</li><li>Spain: 0.4%</li><li>Canada: 0.3%</li><li>Others: 1%</li></ul>');
                    break;
                case "Granadas":
                    img = $('<img src="img/products/granada.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Granada</li> <li>Season: January/July <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Lower Countries: 40%</li><li>Russia: 24%</li><li>United Kingdom: 16%</li><li>Canada: 5%</li><li>Hong Kong: 4%</li><li>Saudi Arabia: 2%</li><li>United States: 2%</li><li>Others: 8%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>Lower Countries: 40%</li><li>Russia: 24%</li><li>United Kingdom: 16%</li><li>Canada: 5%</li><li>Hong Kong: 3%</li><li>Saudi Arabia: 2%</li><li>United States: 2%</li><li>Others: 8%</li></ul>');
                    break;
                case "Grapes":
                    img = $('<img src="img/products/grape.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Grapes</li> <li>Season: September/March <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Others: 23%</li><li>United States: 18%</li><li>Lower Countries: 16%</li><li>China: 14%</li><li>Hong Kong: 13%</li><li>United Kingdom: 6%</li><li>Thailand:5%</li><li>Russia: 5%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>United States: 22%</li><li>Others: 21%</li><li>Lower Countries: 15%</li><li>China: 13%</li><li>Hong Kong: 12%</li><li>United Kingdom: 8%</li><li>Thailand: 5%</li><li>Canada: 4%</li></ul>');
                    break;
                case "Mandarines":
                    img = $('<img src="img/products/mandarin.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Mandarin</li> <li>Season: March/September <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Others: 45%</li><li>United States: 20%</li><li>United Kingdom: 17%</li><li>Canada: 7%</li><li>Lower Countries: 7%</li><li>Ireland: 2%</li><li>Russia: 1%</li><li>China: 1%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>United States: 48%</li><li>United Kingdom: 30%</li><li>Canada: 11%</li><li>Lower Countries: 11%</li><li>Ireland: 2%</li><li>Russia: 2%</li><li>China: 1%</li><li>Others: 5%</li></ul>');
                    break;
                case "Mangoes":
                    img = $('<img src="img/products/mango.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Mango</li> <li>Season: November/May <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Lower Countries: 43%</li><li>United States: 29%</li><li>United Kingdom: 12%</li><li>Spain: 4%</li><li>Canada: 3%</li><li>Chile: 2%</li><li>France: 2%</li><li>Others: 5%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>Lower Countries: 40%</li><li>United States: 29%</li><li>United Kingdom: 10%</li><li>Spain: 5%</li><li>Germany: 4%</li><li>Canada: 3%</li><li>Others: 6%</li></ul>');
                    break;
                case "Oranges":
                    img = $('<img src="img/products/orange.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Orange</li> <li>Season: April/October <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>United Kingdom: 53%</li><li>Lower Countries: 27%</li><li>Sweden: 7%</li><li>Ecuador: 2%</li><li>Martinique: 2%</li><li>Costa Rica: 2%</li><li>Others: 5%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>United Kingdom: 48%</li><li>Lower Countries: 22%</li><li>Sweden: 6%</li><li>Colombia: 5%</li><li>Costa Rica: 4%</li><li>International Waters: 4%</li><li>Ecuador: 3%</li><li>Others: 8%</li></ul>');
                    break;
                case "Tangelos":
                    img = $('<img src="img/products/tangelo.jpg" width="260px" alt="">');
                    specs = $('<ul> <li>Presentation: Fresh Tangelo</li> <li>Season: June/August <li>Capacity: 19 – 24 Tons</li> </ul>');
                    exportVol = $('<h4>Exports in Volume:</h4><ul><li>Lower Countries: 36%</li><li>United States: 31%</li><li>United Kingdom: 7%</li><li>Ireland: 6%</li><li>Russia: 5%</li><li>Finland: 3%</li><li>Canada: 3%</li><li>Others: 9%</li></ul>');
                    exportVal = $('<h4>Exports in Value:</h4><ul><li>United States: 33%</li><li>Lower Countries: 31%</li><li>United Kingdom: 15%</li><li>Finland: 4%</li><li>Ireland: 3%</li><li>Canada: 3%</li><li>Colombia: 2%</li><li>Others: 9%</li></ul>');
                    break;

            }


            modal = "<div class='Modal' id='ProductModal' style='display:none;'><div class='modalContent' id='modalop'><div class='Title'><h2>" + product + "</h2><div class='line'></div></div><div class='productSpecs'></div><div class='productExportVol productExport'></div><div class='productExportVal productExport'></div></div></div>";
            clsbut = $("<span class='close'>&times;</span>");
            closeModal(clsbut, '#ProductModal');

            $('body').append(modal);
            $('.productSpecs').append(specs);
            $('.productExportVol').append(exportVol);
            $('.productExportVal').append(exportVal);
            $('.productSpecs').before(img);
            $('#modalop').prepend(clsbut);
            $('#ProductModal').show();
        })


    }

    showSlides()
    pass('.next');
    pass('.prev');
    focusTarget('#about', '.thirdContainer');
    redirect('#index', '/');
    ProductModal('.productbtn');
    contactForm('#sendbtn');
    focusTarget('#market', '.sixContainer');
    focusTarget('#product', '.sevenContainer');
    focusTarget('#contact', '.fiveContainer');

});
