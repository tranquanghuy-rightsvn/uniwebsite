(function ($, Drupal) {
  Drupal.behaviors.destinationNews = {
    attach: function (context, settings) {
      Drupal.destinationNews.run(context, settings);
    },
  };
  Drupal.destinationNews = Drupal.destinationNews || {};
  Drupal.destinationNews.run = function (context, settings) {
    $(document, context)
      .once("destinationNews")
      .each(function () {
        Drupal.destinationNews.slider();
        Drupal.destinationNews.search();
      });
  };
  Drupal.destinationNews.slider = function () {
    var cat_swiper = new Swiper(".dn-cat-block .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 14,
      navigation: {
        nextEl: ".dn-cat-block .swiper-button-next",
        prevEl: ".dn-cat-block .swiper-button-prev",
      },
    });
    if ($(".destination-slider")) {
      var des_swiper = new Swiper(".destination-slider .swiper-container", {
        slidesPerView: "auto",
        navigation: {
          nextEl: ".destination-slider .swiper-button-next",
          prevEl: ".destination-slider .swiper-button-prev",
        },
        breakpoints: { 0: { spaceBetween: 10 }, 481: { spaceBetween: 16 } },
      });
    }
  };
  Drupal.destinationNews.search = function () {
    let fakeInput = '[name="news-search-custom"]';
    let fakeSubmitBtn = ".submit-btn";
    if ($(window).width() <= 480) {
      fakeInput = '[name="news-search-custom-mb"]';
      fakeSubmitBtn = ".submit-btn-mb";
    }
    if ($('[name="keyword"]')) {
      let realVal = $('[name="keyword"]').val();
      $(fakeInput).val(realVal);
      if (realVal != "") {
        $("span.keyword").text(realVal);
        $(".nokeyword").hide();
        $(".ifkeyword").show();
      }
    }
    $(document).on("click", fakeSubmitBtn, function (e) {
      localStorage.setItem("submitClick", true);
      $(fakeInput).trigger("keyup");
    });
    $(document).on("keyup", fakeInput, function (e) {
      if ($('[name="keyword"]').length) {
        var realInput = $('[name="keyword"]');
        var submitBtn = $(
          '[data-drupal-selector="views-exposed-form-gcp-elastic-search-es-news"] .form-actions>input'
        );
      }
      let val = $(this).val();
      if (
        e.key === "Enter" ||
        e.keyCode === 13 ||
        localStorage.getItem("submitClick") != undefined
      ) {
        localStorage.removeItem("submitClick");
        if (realInput) {
          realInput.val(val);
          submitBtn.mouseout();
          submitBtn.click();
          localStorage.setItem("news_search_ajax", "running");
          $(".search-block .input-wrapper").addClass("loading");
        } else {
          let domain =
            drupalSettings.path.baseUrl +
            drupalSettings.path.pathPrefix +
            "news/search";
          window.location.href = domain + "?keyword=" + val;
        }
      }
    });
    $(document).ajaxStop(function () {
      if (localStorage.getItem("news_search_ajax") == "running") {
        localStorage.removeItem("news_search_ajax");
        $(".search-block .input-wrapper").removeClass("loading");
        let val = $('[name="keyword"]').val();
        if (val != "") {
          $(fakeInput).val(val);
          $("span.keyword").text(val);
          $(".nokeyword").hide();
          $(".ifkeyword").show();
        } else {
          $(".nokeyword").show();
          $(".ifkeyword").hide();
        }
      }
    });
  };
})(jQuery, Drupal);
