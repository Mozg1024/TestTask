'use strict';

(function () {
    SECApp.controllers.carousel.findSlides = carouselFindSlides;
    SECApp.controllers.carousel.slidePrev = carouselSlidePrev;
    SECApp.controllers.carousel.slideNext = carouselSlideNext;

    SECApp.controllers.carousel.$prevBtn = SECApp.wrappers.$secCarousel.find('.prev-control');
    SECApp.controllers.carousel.$nextBtn = SECApp.wrappers.$secCarousel.find('.next-control');

    SECApp.controllers.carousel.$prevBtn.on('mouseup', SECApp.controllers.carousel.slidePrev);
    SECApp.controllers.carousel.$nextBtn.on('mouseup', SECApp.controllers.carousel.slideNext);

    function carouselFindSlides() {
        var $items = SECApp.wrappers.$secCarousel.find('.item'),
            $item,
            i;

        for (i = 0; i < $items.length; i++) {
            $item = $($items[i]);
            if ($item.hasClass('active')) {
                SECApp.controllers.carousel.$activeSlide = $item;
                SECApp.controllers.carousel.$prevSlide = $($items[($items.length + i - 1) % $items.length]);
                SECApp.controllers.carousel.$nextSlide = $($items[(i + 1) % $items.length]);
                break;
            }
        }
    }

    function carouselSlideNext() {
        SECApp.controllers.carousel.findSlides();
        SECApp.controllers.carousel.$activeSlide
            .hide()
            .removeClass('active');
        SECApp.controllers.carousel.$nextSlide
            .addClass('active')
            .fadeIn()
            .show();
    }

    function carouselSlidePrev() {
        SECApp.controllers.carousel.findSlides();
        SECApp.controllers.carousel.$activeSlide
            .hide()
            .removeClass('active');
        SECApp.controllers.carousel.$prevSlide
            .addClass('active')
            .fadeIn()
            .show();
    }
}());
