import AllcoSwiperSlider
    from './allco-swiper-slider/allco-swiper-slider.plugin';

window.PluginManager.register(
    'AllcoSwiperSlider',
    AllcoSwiperSlider,
    '[data-swag-allco-swiper-slider]'
);
if (module.hot) {
    module.hot.accept();
}

(function($){
    $('.is-level-0 .navigation-flyout-col').hover(function() {
        $(this).children(".is-level-1").css('opacity', '1');
        $(this).addClass('show-arrow');
    }, function(){
        $(this).children(".is-level-1").css('opacity', '0');
        $(this).removeClass('show-arrow');
    });
})(jQuery);
