'use strict';

(function () {
    var carousel = SECApp.controllers.carousel,
        $secCarousel = SECApp.wrappers.$secCarousel;

    carousel.findSlides = carouselFindSlides;
    carousel.slidePrev = carouselSlidePrev;
    carousel.slideNext = carouselSlideNext;

    carousel.$prevBtn = $secCarousel.find('.prev-control');
    carousel.$nextBtn = $secCarousel.find('.next-control');

    carousel.$prevBtn.on('mouseup', carousel.slidePrev);
    carousel.$nextBtn.on('mouseup', carousel.slideNext);

    carousel.timer = setInterval(carousel.slideNext, SECApp.constants.carouselDelay);

    function carouselFindSlides() {
        var $items = $secCarousel.find('.item'),
            $item,
            i;

        for (i = 0; i < $items.length; i++) {
            $item = $($items[i]);
            if ($item.hasClass('active')) {
                carousel.$activeSlide = $item;
                carousel.$prevSlide = $($items[($items.length + i - 1) % $items.length]);
                carousel.$nextSlide = $($items[(i + 1) % $items.length]);
                break;
            }
        }
    }

    function carouselSlideNext() {
        carousel.findSlides();
        carousel.$activeSlide
            .hide()
            .removeClass('active');
        carousel.$nextSlide
            .addClass('active')
            .fadeIn();
    }

    function carouselSlidePrev() {
        carousel.findSlides();
        carousel.$activeSlide
            .hide()
            .removeClass('active');
        carousel.$prevSlide
            .addClass('active')
            .fadeIn();
    }
}());
