!(function (e, a) {
  (a.behaviors.globalSearch = {
    attach: function (e, t) {
      a.globalSearch.run(e);
    },
  }),
    (a.globalSearch = a.globalSearch || {}),
    (a.globalSearch.run = function (t) {
      e(document, t)
        .once("globalSearch")
        .each(function () {
          a.globalSearch.detectDevice(function () {
            a.globalSearch.init();
          });
        });
    }),
    (a.globalSearch.detectDevice = function (a) {
      e(window).width() > 992
        ? e(".glbs.mobile").remove()
        : e(".glbs.desktop").remove(),
        "function" == typeof a && a();
    }),
    (a.globalSearch.init = function () {
      a.globalSearch.actionHandler(), a.globalSearch.popupDataHandler();
    }),
    (a.globalSearch.actionHandler = function () {
      ($backdrop = e(".gbs-popup-wrapper")),
        e(document).on("click", ".gsb-icon", function () {
          $backdrop.addClass("act"),
            e
              .get("/" + drupalSettings.path.pathPrefix + "api/search-popup")
              .done(function (e) {
                a.globalSearch.commonKeyword(e.hot_key),
                  a.globalSearch.promo(e),
                  a.globalSearch.news(e);
              }),
            e("html, body").addClass("gsb-popup-show"),
            a.globalSearch.historyData(
              "global_search",
              "get",
              {},
              function (a) {
                if (null != a && Object.keys(a).length > 0) {
                  let t = "";
                  for (let e in a)
                    t +=
                      '<a href="/' +
                      drupalSettings.path.pathPrefix +
                      "search?keyword=" +
                      a[e] +
                      '" class="item">' +
                      a[e] +
                      "</a>";
                  e(".gbs-history .gbs-his-items").html(t),
                    e(".gbs-history").removeClass("empty");
                } else e(".gbs-history").addClass("empty");
              }
            );
        }),
        e(".gbs-modal-bg").click(function () {
          $backdrop.removeClass("act"),
            e("html, body").removeClass("gsb-popup-show");
        });
    }),
    (a.globalSearch.popupDataHandler = function () {
      a.globalSearch.historyHandler(), a.globalSearch.searchBox();
    }),
    (a.globalSearch.historyData = function (e, a, t = [], o = null) {
      let l = localStorage.getItem(e);
      if ("save" == a) {
        let a = t.inputValue,
          r = t.id;
        if (null != a && "" != a) {
          if (((null != r && null != r) || (r = Date.now()), null == l)) {
            let t = {};
            (t[r] = a), localStorage.setItem(e, JSON.stringify(t));
          } else {
            let t = localStorage.getItem(e);
            if (((t = JSON.parse(t)), -1 === Object.values(t).indexOf(a))) {
              let o = Object.keys(t).length;
              if (o >= 5)
                for (let e in t) {
                  if (!(o >= 5)) break;
                  delete t[e], o--;
                }
              (t[r] = a), localStorage.setItem(e, JSON.stringify(t));
            }
          }
          "function" == typeof o && o();
        }
      } else if ("get" == a) {
        let a = localStorage.getItem(e);
        (a = JSON.parse(a)), "function" == typeof o && o(a);
      }
    }),
    (a.globalSearch.historyHandler = function () {
      e(".gbs-popup-wrapper .gbs-btn").click(function () {
        let t = e("input.gbs-search").val();
        (data = { inputValue: t }),
          a.globalSearch.historyData(
            "global_search",
            "save",
            data,
            function () {
              e(".search-box-master").length
                ? (e(".gbs-modal-bg").trigger("click"),
                  e('.search-box-master input[name="gbs-search"]').val(t),
                  e('.search-box-master input[name="gbs-search"]').trigger(
                    "change"
                  ),
                  e(".search-box-master .gbs-search-box .gbs-btn").trigger(
                    "click"
                  ))
                : (window.location.href =
                    "/" +
                    drupalSettings.path.pathPrefix +
                    "search?keyword=" +
                    t);
            }
          );
      }),
        a.globalSearch.historyData("global_search", "get", {}, function (a) {
          if (null != a && Object.keys(a).length > 0) {
            let t = "";
            for (let e in a)
              t +=
                '<a href="/' +
                drupalSettings.path.pathPrefix +
                "search?keyword=" +
                a[e] +
                '" class="item">' +
                a[e] +
                "</a>";
            e(".gbs-history .gbs-his-items").html(t),
              e(".gbs-history").removeClass("empty");
          } else e(".gbs-history").addClass("empty");
        });
    }),
    (a.globalSearch.searchBox = function () {
      let t = null;
      e('.gbs-popup-wrapper input[name="gbs-search"]').on(
        "keyup",
        function (o) {
          e(".gbs-history").addClass("empty"),
            "" == e(this).val() && e(".gbs-history").removeClass("empty"),
            clearTimeout(t),
            ($this = e(this)),
            (t = setTimeout(function () {
              if ($this.val().length >= 3) {
                var t = "api/search-popup?key=" + $this.val();
                e.get("/" + drupalSettings.path.pathPrefix + t).done(function (
                  e
                ) {
                  a.globalSearch.commonKeyword(e.hot_key),
                    a.globalSearch.promo(e),
                    a.globalSearch.news(e);
                });
              } else
                "" == $this.val() &&
                  e
                    .get(
                      "/" + drupalSettings.path.pathPrefix + "api/search-popup"
                    )
                    .done(function (e) {
                      a.globalSearch.commonKeyword(e.hot_key),
                        a.globalSearch.promo(e),
                        a.globalSearch.news(e);
                    });
            }, 1e3)),
            ("Enter" !== o.key && 13 !== o.keyCode) ||
              a.globalSearch.historyData(
                "global_search",
                "save",
                { inputValue: $this.val() },
                function () {
                  e(".search-box-master").length
                    ? (e(".gbs-modal-bg").trigger("click"),
                      e('.search-box-master input[name="gbs-search"]').val(
                        $this.val()
                      ),
                      e('.search-box-master input[name="gbs-search"]').trigger(
                        "change"
                      ),
                      e(".search-box-master .gbs-search-box .gbs-btn").trigger(
                        "click"
                      ))
                    : (window.location.href =
                        "/" +
                        drupalSettings.path.pathPrefix +
                        "search?keyword=" +
                        $this.val());
                }
              );
        }
      );
    }),
    (a.globalSearch.commonKeyword = function (a) {
      if (a) {
        let t = e(".common-keywords"),
          o = t.find(".gbs-common-kw-items");
        t.removeClass("empty");
        let l = "";
        for (let e = 0; e < a.length; e++)
          l +=
            '<a href="/' +
            drupalSettings.path.pathPrefix +
            "search?keyword=" +
            a[e].name +
            '">' +
            a[e].name +
            "</a>";
        o.html(l);
      }
    }),
    (a.globalSearch.promo = function (a) {
      let t = e(".gbs-result .promo"),
        o = t.find(".gbs-promo-items");
      t.removeClass("empty");
      let l = "";
      (l += a.promo), o.html(l);
    }),
    (a.globalSearch.news = function (a) {
      let t = e(".gbs-result .news"),
        o = t.find(".gbs-news-items");
      t.removeClass("empty");
      let l = "";
      (l += a.news), o.html(l);
    });
})(jQuery, Drupal);
