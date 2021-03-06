$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1500,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__contant').removeClass('catalog__contant_active').eq($(this).index()).addClass('catalog__contant_active');
    });

    

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('0.5s');    
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('0.5s');
    });

    $('.button_catalog-item').each(function(i){
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); 
            $('.overlay, #order').fadeIn('0.5s');    
        });
    });

    function valideForms(form) {
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                  },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: {
                    required: "????????????????????, ?????????????? ???????? ??????",
                    minlength: jQuery.validator.format("?????????????? ?????????????? {0} ??????????????")
                
                },
                phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
                email: {
                  required: "????????????????????, ?????????????? ???????? E-mail",
                  email: "?????????????????????? ???????????? ?????????? ??????????"
                }
            }
        });   
    }
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    // Smooth scroll and pageup

    $(window).scroll(function () {
        if($(this).scrollTop() > 1800) {
            $('.pageup').fadeIn();
        }else{
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});

