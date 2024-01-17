(function($, Drupal) {
    Drupal.behaviors.new_homepage_js = {
        attach: function(context, settings) {
            Drupal.new_homepage_js.run(context);
        }
    };
    Drupal.new_homepage_js = Drupal.new_homepage_js || {};
    Drupal.new_homepage_js.run = function(context) {
        $(document, context).once('new_homepage_js').each(function() {
            Drupal.new_homepage_js.bannerBlock();
            Drupal.new_homepage_js.promoBlock();
            Drupal.new_homepage_js.lazy_load();
        });
    };
    Drupal.new_homepage_js.bannerBlock = function() {
        var swiper = new Swiper('.banner-block-slider.swiper-container', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
        var bannerVideo = document.getElementById("banner-vid");
        var triggerPlay = false;
        if ($("#banner-vid").length) {
            $(document).scroll(function() {
                if (!triggerPlay) {
                    triggerPlay = true;
                    bannerVideo.play();
                }
            });
        }

        function playVid() {
            bannerVideo.play();
        }
    };
    Drupal.new_homepage_js.promoBlock = function() {
        if ($(window).width() <= 480) {
            var swiper = new Swiper('.promo-items .swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 16
            });
        }
    };
    Drupal.new_homepage_js.lazy_load = function() {
        $("img.lazyload").lazyload({
            effect: "fadeIn"
        });
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    };
})(jQuery, Drupal);