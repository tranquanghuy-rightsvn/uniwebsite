!(function (t, i) {
  (i.behaviors.ht_scripts = {
    attach: function (t, e) {
      i.ht_main.run(t, e);
    },
  }),
    (i.ht_main = i.ht_main || {}),
    (i.ht_main.run = function (e, n) {
      t(document, e)
        .once("ht_scripts")
        .each(function () {
          i.ht_main.pquc_main_menu(),
            i.ht_main.totalResultListing(),
            i.ht_main.showHideBtn();
        });
    }),
    (i.ht_main.pquc_main_menu = function () {
      t(window).width() <= 992 &&
        t(document).on("click", ".mb_hamburger", function () {
          t("#site-header>.container>ul.menu").toggleClass("open");
        });
    }),
    (i.ht_main.totalResultListing = function () {
      if (t("span.total_result").length && t(".view-header").length) {
        t(".view-header").hide(), t("span.total_result").hide();
        let i = t(".view-header").text().trim();
        t("span.total_result").text(i), t("span.total_result").show();
      }
    }),
    (i.ht_main.showHideBtn = function () {
      t(".hs-par").length > 0 &&
        (t(".hs-par").each(function () {
          let i =
            '<div class="detail_res fake ht_reset_pd ht_reset_margin" style="opacity:0;position:absolute"><div class="res_des ht_reset_pd ht_reset_margin">' +
            t(this).find(".hs-text").html() +
            "</div></div>";
          t(this).find(".hs-text").append(i);
          let e = t(".detail_res.fake").height();
          console.log(e),
            e > 68 && t(window).width() > 480
              ? (t(this).find(".hs-btn").addClass("act"),
                t(this).find(".hs-text").css("height", "94px"))
              : e > 160 &&
                t(window).width() <= 480 &&
                (t(this).find(".hs-btn").addClass("act"),
                t(this).find(".hs-text").css("height", "161px")),
            t(".detail_res.fake").remove();
        }),
        t(document).on("click", ".hs-par .hs-btn", function () {
          t(this).find(".s").toggleClass("act"),
            t(this).find(".h").toggleClass("act"),
            t(this).siblings(".hs-text").toggleClass("act");
        }));
    });
})(jQuery, Drupal);
