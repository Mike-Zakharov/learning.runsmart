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
});