'use strict';

(function () {
    var ctrlAlias = SECApp.controllers.carousel,
        wrpAlias = SECApp.wrappers.$secCarousel;

    ctrlAlias.findSlides = carouselFindSlides;
    ctrlAlias.slidePrev = carouselSlidePrev;
    ctrlAlias.slideNext = carouselSlideNext;

    ctrlAlias.$prevBtn = wrpAlias.find('.prev-control');
    ctrlAlias.$nextBtn = wrpAlias.find('.next-control');

    ctrlAlias.$prevBtn.on('mouseup', ctrlAlias.slidePrev);
    ctrlAlias.$nextBtn.on('mouseup', ctrlAlias.slideNext);

    ctrlAlias.timer = setInterval(ctrlAlias.slideNext, SECApp.constants.carouselDelay);

    function carouselFindSlides() {
        var $items = wrpAlias.find('.item'),
            $item,
            i;

        for (i = 0; i < $items.length; i++) {
            $item = $($items[i]);
            if ($item.hasClass('active')) {
                ctrlAlias.$activeSlide = $item;
                ctrlAlias.$prevSlide = $($items[($items.length + i - 1) % $items.length]);
                ctrlAlias.$nextSlide = $($items[(i + 1) % $items.length]);
                break;
            }
        }
    }

    function carouselSlideNext() {
        ctrlAlias.findSlides();
        ctrlAlias.$activeSlide
            .hide()
            .removeClass('active');
        ctrlAlias.$nextSlide
            .addClass('active')
            .fadeIn();
    }

    function carouselSlidePrev() {
        ctrlAlias.findSlides();
        ctrlAlias.$activeSlide
            .hide()
            .removeClass('active');
        ctrlAlias.$prevSlide
            .addClass('active')
            .fadeIn();
    }
}());
