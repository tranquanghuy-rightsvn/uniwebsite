!(function (e, t) {
  const a = window.location.search,
    o = new URLSearchParams(a);
  let n = o.get("keyword");
  e(document).ready(function () {
    let t = o.get("type");
    "nha-trang" === t &&
      (e("#des60").click(),
      e(".des-filter .filter-item input").trigger("change")),
      "phu-quoc" === t &&
        (e("#des61").click(),
        e(".des-filter .filter-item input").trigger("change")),
      "nam-hoi-an" === t &&
        (e("#des63").click(),
        e(".des-filter .filter-item input").trigger("change"));
  }),
    (t.behaviors.globalSearchPage = {
      attach: function (a, o) {
        e(document, a)
          .once("globalSearchPage")
          .each(function () {
            e("ul.tour-pager a").click(function (a) {
              a.preventDefault();
              let o = { page: e(this).attr("next-page"), keyword: n };
              t.globalSearchPage.getTourData(o);
            }),
              t.globalSearchPage.getTourData(
                { page: 1, keyword: n },
                function (e) {
                  t.globalSearchPage.loadMoreHandler();
                }
              ),
              t.globalSearchPage.filter(),
              t.globalSearchPage.searchBox();
            let a = null;
            e(document).ajaxComplete(function (e, o, n) {
              clearTimeout(a),
                (a = setTimeout(function () {
                  t.globalSearchPage.resultCounter();
                }, 1e3));
            });
          });
      },
    }),
    (t.globalSearchPage = t.globalSearchPage || {}),
    (t.globalSearchPage.getTourData = function (t, a = null) {
      let o = [];
      t.page && o.push("page=" + t.page),
        t.keyword && o.push("key=" + t.keyword),
        t.locationID && o.push("TagGroupLocations=" + t.locationID),
        (o = o != [] ? "?" + o.join("&") : ""),
        e.ajax({
          type: "GET",
          url: "/" + drupalSettings.path.pathPrefix + "api/search-sku" + o,
          dataType: "json",
          success: function (o) {
            if (
              e(".destination_tour .tour-block-content .inside-wrapper").length
            ) {
              let n = parseInt(o.pageSize) * parseInt(o.pageIndex),
                r = parseInt(o.totalCount) - n,
                i = 6;
              r < 6 && (i = r),
                e("ul.tour-pager a").attr(
                  "next-page",
                  parseInt(o.pageIndex) + 1
                ),
                e("ul.tour-pager a").text(i + "/" + r + "/" + o.totalCount);
              const l = window.location.pathname.split("/");
              console.log(l[1]);
              let s = "";
              for (let e in o.data) {
                let t = o.data[e],
                  a = "tour";
                5 == t.type && (a = "experience");
                const n = new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }),
                  r = n.format(t.salePrice),
                  i = n.format(t.originalPrice);
                s += `<div class="views-row">\n                      <div class="new-hotel-teaser new-tour-teaser">\n                          <div class="img-wrapper">\n                              <a href="https://booking.vinpearl.com/vi-VND/${a}/${t.urlSlug}" target="_blank">\n                                  <img class="ht_mobile_hide" src="https://${t.thumbImageUri}" width="265" height="175">\n                                  <img class="ht_mobile_show" src="https://${t.thumbImageUri}" width="176" height="170">\n                              </a>\n                          </div>\n                        <div class="info-wrapper">\n                          <a href="https://booking.vinpearl.com/vi-VND/${a}/${t.urlSlug}?_ga=2.5381747.1559005774.1683176759-1185405550.1680060790" target="_blank">\n                            <h3 class="title three_dots_2">${t.name}</h3>\n                          </a>\n                          <div class="info-right">\n                              <div class="sale-price">\n                               ${r}\n                              </div>\n                              <div class="original-price">\n                                ${i}\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>`;
              }
              "removeAll" == t.action
                ? e(
                    ".destination_tour .tour-block-content .inside-wrapper"
                  ).html(s)
                : e(
                    ".destination_tour .tour-block-content .inside-wrapper"
                  ).append(s),
                "function" == typeof a && a(o);
            }
          },
          error: function (e) {
            console.log("error.");
          },
        });
    }),
    (t.globalSearchPage.loadMoreHandler = function () {
      e(".show-more-block").length > 0 &&
        e(".show-more-block").each(function () {
          let t =
              '<span class="custom-text">' +
              e(".promo-trans .all").text() +
              "</span>",
            a = e(this),
            o = a.attr("data-id");
          e(document).ajaxComplete(function (n, r, i) {
            let l = a.find('a[rel="next"]');
            if (l.length > 0) {
              let n = l.text().trim().split("/"),
                r = parseInt(n[0]),
                i = parseInt(n[1]),
                s = parseInt(n[2]);
              if (
                ((void 0 === s || isNaN(s)) && (s = 0),
                sessionStorage.setItem("count_" + o, s),
                r > 0 && (r < 6 || (6 == r && r == i)))
              ) {
                e(".promo-trans .left").text(), a.attr("data-content-type");
                l.parents("li").siblings("span.custom-text").remove(),
                  l.parents("li").after(t),
                  l
                    .parents("li")
                    .siblings("span.custom-text")
                    .addClass("ready"),
                  l.parents("ul.tour-pager").show(),
                  l.removeClass("no-more-promo");
              } else
                r <= 0
                  ? (l.addClass("no-more-promo"),
                    l
                      .parents("li")
                      .siblings("span.custom-text")
                      .removeClass("ready"),
                    l.parents("ul.tour-pager").hide())
                  : (l.parents("li").siblings("span.custom-text").remove(),
                    l.parents("li").after(t),
                    l
                      .parents("li")
                      .siblings("span.custom-text")
                      .addClass("ready"),
                    l.parents("ul.tour-pager").show(),
                    l.removeClass("no-more-promo"));
            } else sessionStorage.setItem("count_" + o, 0);
          });
        });
    }),
    (t.globalSearchPage.filter = function () {
      e(".cat-filter .filter-item input").on("change", function () {
        let t = e(this).attr("id");
        0 == e(this).prop("checked")
          ? e('[data-id="' + t + '"]').hide()
          : e('[data-id="' + t + '"]').show();
      }),
        e(".des-filter .filter-item input").on("change", function () {
          let o = e(this).val();
          if ("other" == o) {
            let t = ["60", "61", "63"];
            1 == e(this).prop("checked")
              ? a("check", t, o)
              : a("uncheck", t, o);
          } else if (1 == e(this).prop("checked")) {
            console.log(111), a("check", o);
            let r = e(this).attr("data-location-id");
            t.globalSearchPage.getTourData({
              page: 1,
              keyword: n,
              locationID: r,
              action: "removeAll",
            });
          } else
            a("uncheck", o),
              t.globalSearchPage.getTourData({
                page: 1,
                keyword: n,
                action: "removeAll",
              });
        });
      let a = function (t, a, o = null) {
        let n = [
          "destination_hotel",
          "destination_promo",
          "destination_news",
          "destination_gallery",
        ];
        for (let r in n)
          if ("other" == o) {
            let o = "." + n[r] + " input";
            for (let e in a) o += ':not([name="' + n[r] + "[" + a[e] + ']"])';
            (otherDesArr = e(o)),
              otherDesArr.each(function (a) {
                "check" == t
                  ? e(this).prop("checked", !0)
                  : e(this).prop("checked", !1),
                  a + 1 == otherDesArr.length &&
                    e("." + n[r] + ' input[name="keyword"]').trigger("change");
              });
          } else
            "check" == t
              ? e('input[name="' + n[r] + "[" + a + ']"]').prop("checked", !0)
              : e('input[name="' + n[r] + "[" + a + ']"]').prop("checked", !1),
              e('input[name="' + n[r] + "[" + a + ']"]').trigger("change");
      };
      e(window).width() <= 480 &&
        e(".gbs-page-sidebar>div").click(function () {
          e(this).toggleClass("act");
        });
    }),
    (t.globalSearchPage.resultCounter = function () {
      let t = [
          "count_promo",
          "count_gallery",
          "count_hotel",
          "count_news",
          "count_tour",
        ],
        a = 0;
      for (let e in t) {
        if (null == sessionStorage.getItem(t[e])) break;
        a += parseInt(sessionStorage.getItem(t[e]));
      }
      if (0 != a) {
        e("#global-search .gbs-page-main .total-result").show(),
          e(".gbs-page-main .total-result .total").text(a),
          null != n && "" != n
            ? (e(".gbs-page-main .total-result .keyword").text('"' + n + '"'),
              e(".total-result .text-keyword").show(),
              e(".gbs-page-main .total-result .keyword").show())
            : (e(".total-result .text-keyword").hide(),
              e(".gbs-page-main .total-result .keyword").hide()),
          e(".gbs-page-main .total-result").removeClass("d-none");
        for (let a in t)
          sessionStorage.removeItem(t[a]),
            e(".show-more-block").each(function () {
              e(this).find(".empty").length ? e(this).hide() : e(this).show();
            });
      } else e("#global-search .gbs-page-main .total-result").hide();
    }),
    (t.globalSearchPage.searchBox = function () {
      "" != n && e('.search-box-master input[name="gbs-search"]').val(n),
        e('.search-box-master input[name="gbs-search"]').on(
          "keyup",
          function (t) {
            ("Enter" !== t.key && 13 !== t.keyCode) ||
              ((n = e(this).val()),
              e(".search-box-master .gbs-search-box .gbs-btn").trigger(
                "click"
              ));
          }
        ),
        e(".search-box-master .gbs-search-box .gbs-btn").on(
          "click",
          function () {
            let a = e('.search-box-master input[name="gbs-search"]').val();
            (n = a),
              e('[name="keyword"]').each(function () {
                e(this).val(a), e(this).trigger("change");
              }),
              t.globalSearchPage.getTourData({
                page: 1,
                keyword: n,
                action: "removeAll",
              });
          }
        );
    });
})(jQuery, Drupal);
