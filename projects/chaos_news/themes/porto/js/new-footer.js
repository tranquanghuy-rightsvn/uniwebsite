!(function (o, t) {
  (t.behaviors.footer_js = {
    attach: function (o, e) {
      t.footer_js.run(o);
    },
  }),
    (t.footer_js = t.footer_js || {}),
    (t.footer_js.run = function (e) {
      o(document, e)
        .once("footer_js")
        .each(function () {
          t.footer_js.footerMenus();
        });
    }),
    (t.footer_js.footerMenus = function () {
      o(window).width() <= 480 &&
        o(".footer-wrapper .footer-menu .menu-tit").click(function () {
          o(this).parent().toggleClass("show"),
            o(this).parent().siblings(".show").removeClass("show");
        });
    });
})(jQuery, Drupal);
