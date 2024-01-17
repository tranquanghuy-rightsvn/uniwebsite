(function ($, Drupal) {
  Drupal.behaviors.recommendation = {
    attach: function (context, settings) {
      Drupal.recommendation.run();
      let images = document.querySelectorAll(".lazyload");
    },
  };
  Drupal.recommendation = Drupal.recommendation || {};
  var locas = [];
  $("#ids_location span").each(function () {
    let value = $(this).text();
    if (value == "" || value == 114 || value == 6266) value = "full";
    else if (value == 6309) value = "tin-golf";
    else if (value == 61) value = "phu-quoc";
    else if (value == 60) value = "nha-trang";
    else if (value == 63) value = "nam-hoi-an";
    else if (value == 62) value = "da-nang";
    else if (value == 102) value = "ha-long";
    else if (value == 65) value = "hai-phong";
    else if (value == 103) value = "thanh-hoa";
    else if (value == 64) value = "hue";
    else if (value == 105) value = "ha-tinh";
    else if (value == 67) value = "ho-chi-minh";
    else if (value == 66) value = "can-tho";
    else if (value == 106) value = "tay-ninh";
    else if (value == 101) value = "lang-son";
    else if (value == 101) value = "lang-son";
    else if (value == 69) value = "ha-nam";
    else if (value == 6267) value = "ha-noi";
    else if (value == 104) value = "nghe-an";
    else if (value == 70) value = "quang-binh";
    locas.push(value);
  });
  var locationByRegex =
    $.inArray("full", locas) !== -1
      ? []
      : locas.length > 1 || locas.length == 0
      ? locas
      : [locas[0]];
  Drupal.recommendation.run = function (context) {
    $(document, context)
      .once("recommendation")
      .each(function () {
        Drupal.recommendation.recommendationSlider();
        let checkElemExist = function (arr) {
          let result = false;
          for (let i in arr) {
            if ($("." + arr[i]).length != 0) {
              result = true;
              break;
            }
          }
          return result;
        };
        let array = ["block-homepage-recommend-block"];
        if (checkElemExist(array)) {
          setTimeout(function () {
            Drupal.recommendation.getRecommendationData(
              "#block-homepage-recommend-block .block-content",
              "homepage",
              function (data) {
                jQuery("img.lazyload").lazyload({ effect: "fadeIn" });
                Drupal.recommendation.recommendationSliderHome();
              }
            );
          }, 0);
        } else {
          if ($(".recommendation-block").length != 0) {
            setTimeout(function () {
              Drupal.recommendation.getRecommendationData(
                ".recommendation-block>.content",
                "other",
                function (data) {
                  jQuery("img.lazyload").lazyload({ effect: "fadeIn" });
                  Drupal.recommendation.recommendationSlider();
                }
              );
            }, 0);
          }
        }
        if ($(".promo-block.nfu-block").length != 0) {
          Drupal.recommendation.getRecommendationData(
            ".promo-block.nfu-block .nfu-item-wrapper",
            "hot_promo",
            function () {
              Drupal.recommendation.productGA(
                $(".promo-block.nfu-block .nfu-item")
              );
            }
          );
        }
        Drupal.recommendation.skuInArticle();
        if ($(".news-sidebar .nfu-item").length != 0) {
          Drupal.recommendation.articleGA($(".news-sidebar .nfu-item"));
        }
        Drupal.recommendation.hotNewsAndPlace();
        if (
          $('.related-news-block li[data-list="article_similar"]').length != 0
        ) {
          Drupal.recommendation.relatedArticleGA(
            $('.related-news-block li[data-list="article_similar"]')
          );
        }
        if ($(".hotDes .hotDes-item").length != 0) {
          Drupal.recommendation.hotDestinationGA($(".hotDes .hotDes-item"));
        }
        Drupal.recommendation.ntComplexTourBlock();
        Drupal.recommendation.hotelApi();
      });
  };
  Drupal.recommendation.isInViewport = function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  Drupal.recommendation.renderProductObject = function (
    item,
    type = "product"
  ) {
    let obj = {};
    if (type == "product") {
      obj = {
        name: item.attr("data-name"),
        id: item.attr("data-id"),
        price: item.attr("data-price"),
        brand: item.attr("data-brand"),
        category: item.attr("data-category"),
        list: item.attr("data-list"),
        position: item.attr("data-position"),
        dimension29: item.attr("data-dimension29"),
        dimension30: item.attr("data-dimension30"),
        dimension31: item.attr("data-dimension31"),
        dimension32: item.attr("data-dimension32"),
      };
    } else if (type == "article_impression" || type == "article_click") {
      obj = {
        event: "article_for_you_impressions",
        list_article: item.attr("data-list"),
        position_article: item.attr("data-position"),
        article_title: item.attr("data-name"),
        article_id: item.attr("data-id"),
      };
      if (type == "article_click") {
        obj.event = "article_for_you_click";
      }
    } else if (
      type == "related_article_impression" ||
      type == "related_article_click"
    ) {
      obj = {
        event: "article_similar_impressions",
        list_article: item.attr("data-list"),
        position_article: item.attr("data-position"),
        article_title: item.attr("data-name"),
        article_id: item.attr("data-id"),
      };
      if (type == "related_article_click") {
        obj.event = "article_similar_click";
      }
    } else if (
      type == "destination_for_you_impression" ||
      type == "destination_for_you_click"
    ) {
      obj = {
        event: "destination_for_you_impressions",
        list_destination: item.attr("data-list"),
        position_destination: item.attr("data-position"),
        destination_name: item.attr("data-name"),
      };
      if (type == "destination_for_you_click") {
        obj.event = "destination_for_you_click";
      }
    }
    return obj;
  };
  Drupal.recommendation.recommendationSlider = function () {
    let productImpressions = function () {
      let data = [];
      let recommend_items = $(".recommendation-block .swiper-slide");
      recommend_items.each(function () {
        if (
          Drupal.recommendation.isInViewport(this) &&
          !$(this).hasClass("checked")
        ) {
          let item = Drupal.recommendation.renderProductObject($(this));
          data.push(item);
          $(this).addClass("checked");
        }
      });
      if (data.length != 0) {
        var productImpressionArray = data;
        var ecommerceObject = {
          ecommerce: { impressions: productImpressionArray },
          event: "product_impressions",
          booking_service_type: "tbd",
          booking_destination: "tbd",
        };
        dataLayer.push(ecommerceObject);
      }
    };
    let productClick = function () {
      let recommend_items = $(".recommendation-block .swiper-slide");
      recommend_items.click(function () {
        let productClickedArray = [];
        let item = Drupal.recommendation.renderProductObject($(this));
        item.dimension39 = "tbd";
        item.dimension40 = "tbd";
        item.dimension41 = "tbd";
        item.dimension42 = "tbd";
        item.dimension43 = "tbd";
        item.dimension44 = "tbd";
        item.dimension45 = "tbd";
        item.dimension46 = "tbd";
        item.dimension47 = "tbd";
        item.dimension48 = "tbd";
        item.dimension48 = "tbd";
        productClickedArray.push(item);
        var ecommerceObject = {
          ecommerce: {
            click: {
              products: productClickedArray,
              actionField: { list: "Recommendation_Products_For_You" },
            },
          },
          event: "product_click",
        };
        dataLayer.push(ecommerceObject);
      });
    };
    productImpressions();
    productClick();
    var rd_swiper = new Swiper(".rd-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        nextEl: ".rd-slider-button-next",
        prevEl: ".rd-slider-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        481: { slidesPerView: 2.2 },
        768: { slidesPerView: 3 },
      },
      on: {
        init: function () {
          productImpressions();
          window.addEventListener("scroll", function (e) {
            productImpressions();
          });
        },
        slideChangeTransitionEnd: function () {
          productImpressions();
        },
      },
    });
  };
  Drupal.recommendation.recommendationSliderHome = function () {
    let productImpressions = function () {
      let data = [];
      let recommend_items = $(
        "#block-homepage-recommend-block .block-content .swiper-slide"
      );
      recommend_items.each(function () {
        if (
          Drupal.recommendation.isInViewport(this) &&
          !$(this).hasClass("checked")
        ) {
          let item = Drupal.recommendation.renderProductObject($(this));
          data.push(item);
          $(this).addClass("checked");
        }
      });
      if (data.length != 0) {
        var productImpressionArray = data;
        var ecommerceObject = {
          ecommerce: { impressions: productImpressionArray },
          event: "product_impressions",
          booking_service_type: "tbd",
          booking_destination: "tbd",
        };
        dataLayer.push(ecommerceObject);
      }
    };
    let productClick = function () {
      let recommend_items = $(
        "#block-homepage-recommend-block .block-content .swiper-slide"
      );
      recommend_items.click(function () {
        let productClickedArray = [];
        let item = Drupal.recommendation.renderProductObject($(this));
        item.dimension39 = "tbd";
        item.dimension40 = "tbd";
        item.dimension41 = "tbd";
        item.dimension42 = "tbd";
        item.dimension43 = "tbd";
        item.dimension44 = "tbd";
        item.dimension45 = "tbd";
        item.dimension46 = "tbd";
        item.dimension47 = "tbd";
        item.dimension48 = "tbd";
        item.dimension48 = "tbd";
        productClickedArray.push(item);
        var ecommerceObject = {
          ecommerce: {
            click: {
              products: productClickedArray,
              actionField: { list: "Recommendation_Products_For_You" },
            },
          },
          event: "product_click",
        };
        dataLayer.push(ecommerceObject);
      });
    };
    productImpressions();
    productClick();
    var swiper = new Swiper(".recommend-slider.swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: { el: ".recommend.swiper-pagination", type: "bullets" },
      navigation: {
        nextEl: ".recommend-slide-nav .swiper-button-next",
        prevEl: ".recommend-slide-nav .swiper-button-prev",
      },
      breakpoints: { 0: { spaceBetween: 12 }, 480: { spaceBetween: 16 } },
      on: {
        init: function () {
          productImpressions();
          window.addEventListener("scroll", function (e) {
            productImpressions();
          });
        },
        slideChangeTransitionEnd: function () {
          productImpressions();
        },
      },
    });
  };
  Drupal.recommendation.productGA = function (recommendation_items) {
    let productImpressions = function () {
      let data = [];
      recommendation_items.each(function () {
        if (
          Drupal.recommendation.isInViewport(this) &&
          !$(this).hasClass("checked")
        ) {
          let item = Drupal.recommendation.renderProductObject($(this));
          data.push(item);
          $(this).addClass("checked");
        }
      });
      if (data.length != 0) {
        var productImpressionArray = data;
        var ecommerceObject = {
          ecommerce: { impressions: productImpressionArray },
          event: "product_impressions",
          booking_service_type: "tbd",
          booking_destination: "tbd",
        };
        dataLayer.push(ecommerceObject);
      }
    };
    let productClick = function () {
      recommendation_items.each(function () {
        let _this = $(this);
        _this.find("a").click(function () {
          let productClickedArray = [];
          let item = Drupal.recommendation.renderProductObject(_this);
          productClickedArray.push(item);
          var ecommerceObject = {
            ecommerce: {
              click: {
                products: productClickedArray,
                actionField: { list: $(this).attr("data-list") },
              },
            },
            event: "product_click",
            booking_service_type: "tbd",
            booking_destination: "tbd",
          };
          dataLayer.push(ecommerceObject);
        });
      });
    };
    productImpressions();
    productClick();
    window.addEventListener("scroll", function (e) {
      productImpressions();
    });
  };
  Drupal.recommendation.articleGA = function (recommendation_items) {
    let productImpressions = function () {
      recommendation_items.each(function () {
        if (
          Drupal.recommendation.isInViewport(this) &&
          !$(this).hasClass("checked")
        ) {
          let item = Drupal.recommendation.renderProductObject(
            $(this),
            "article_impression"
          );
          dataLayer.push(item);
          $(this).addClass("checked");
        }
      });
    };
    let productClick = function () {
      recommendation_items.each(function () {
        let _this = $(this);
        _this.find("a").click(function () {
          let item = Drupal.recommendation.renderProductObject(
            _this,
            "article_click"
          );
          dataLayer.push(item);
        });
      });
    };
    productImpressions();
    productClick();
    window.addEventListener("scroll", function (e) {
      productImpressions();
    });
  };
  Drupal.recommendation.relatedArticleGA = function (recommendation_items) {
    let productImpressions = function () {
      recommendation_items.each(function () {
        if (
          Drupal.recommendation.isInViewport(this) &&
          !$(this).hasClass("checked")
        ) {
          let item = Drupal.recommendation.renderProductObject(
            $(this),
            "related_article_impression"
          );
          dataLayer.push(item);
          $(this).addClass("checked");
        }
      });
    };
    let productClick = function () {
      recommendation_items.click(function () {
        let item = Drupal.recommendation.renderProductObject(
          $(this),
          "related_article_click"
        );
        dataLayer.push(item);
      });
    };
    productImpressions();
    productClick();
    window.addEventListener("scroll", function (e) {
      productImpressions();
    });
  };
  Drupal.recommendation.hotDestinationGA = function (recommendation_items) {
    let productImpressions = function () {
      recommendation_items.each(function () {
        if (
          Drupal.recommendation.isInViewport(this) &&
          !$(this).hasClass("checked")
        ) {
          let item = Drupal.recommendation.renderProductObject(
            $(this),
            "destination_for_you_impression"
          );
          dataLayer.push(item);
          $(this).addClass("checked");
        }
      });
    };
    let productClick = function () {
      recommendation_items.click(function () {
        let item = Drupal.recommendation.renderProductObject(
          $(this),
          "destination_for_you_click"
        );
        dataLayer.push(item);
      });
    };
    productImpressions();
    productClick();
    window.addEventListener("scroll", function (e) {
      productImpressions();
    });
  };
  Drupal.recommendation.skuInArticle = function () {
    if ($("body.page-node-type-news").length && $("#ids_location").length) {
      function numberWithCommas(x) {
        if (x != undefined && x != null) {
          x = parseInt(x);
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return 0;
      }
      function skuHtmlRender(skuType, dataHotel) {
        let letters = ["a", "b", "c", "d"];
        let randomString = "";
        for (let i = 0; i < 4; i++) {
          let randomIndex = Math.floor(Math.random() * letters.length);
          let randomLetter = letters[randomIndex];
          randomString += randomLetter;
        }
        let skuHtml = "";
        if (dataHotel.recommend_type == "2") {
          skuHtml = `
                                    <div class="hotel-wrapper promo-wrapper hotel-api">
                                        <div class="hotel-img-wrapper">
                                            <div id="carousel-${randomString}" class="carousel slide" data-ride="carousel" data-interval="false">
                                                <div class="carousel-inner">
                                                    ${dataHotel.images
                                                      .map(
                                                        (item, index) => `
                                                        <div class="carousel-item ${
                                                          index == 0
                                                            ? "active"
                                                            : ""
                                                        }">
                                                            <img class="w-100" data-src="${
                                                              "https://" +
                                                              item.url
                                                            }" src="${
                                                          "https://" + item.url
                                                        }" alt="anh khong gian phong">
                                                        </div>
                                                    `
                                                      )
                                                      .join("")}
                                                </div>
                                                <a class="carousel-control-prev" type="button" href="#carousel-${randomString}" data-slide="prev" style="width: 32px; height: 32px; margin: auto;">
                                                    <img src="../themes/porto/img/icons/prev.svg" height="32" width="32" aria-hidden="true" alt="icon prev">
                                                </a>
                                                <a class="carousel-control-next" type="button" href="#carousel-${randomString}" data-slide="next" style="width: 32px; height: 32px; margin: auto;">
                                                    <img src="../themes/porto/img/icons/next.svg" height="32" width="32" aria-hidden="true" alt="icon next">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="hotel-info-wrapper">
                                            <h5 class="hotel-title three_dots_2">${
                                              dataHotel.name
                                            }</h5>
                                            <p class="addr three_dots_2">${
                                              dataHotel.address
                                            }</p>
                                            <div class="${
                                              dataHotel.hotelTags == null
                                                ? "hotel-tag d-none"
                                                : "hotel-tag"
                                            }">
                                                ${
                                                  dataHotel.hotelTags == null
                                                    ? ""
                                                    : dataHotel.hotelTags
                                                        .map(
                                                          (item) =>
                                                            `<span>${item}</span>`
                                                        )
                                                        .join("")
                                                }
                                            </div>
                                            <div class="info-block">
                                                <div class="block-left">
                                                </div>
                                                <div class="block-right">
                                                    ${
                                                      dataHotel.memberRate !=
                                                      null
                                                        ? `
                                                    <div class="sale_price"><span>${
                                                      drupalSettings.translation
                                                        .averageAmount
                                                    }</span>${numberWithCommas(
                                                            Math.round(
                                                              dataHotel.averageAmount
                                                            )
                                                          )} ${
                                                            dataHotel.currencyCode
                                                          }</div>
                                                    <div class="original_price"><span>${
                                                      drupalSettings.translation
                                                        .memberRate
                                                    }</span>${numberWithCommas(
                                                            Math.round(
                                                              dataHotel.memberRate
                                                            )
                                                          )} ${
                                                            dataHotel.currencyCode
                                                          }</div>
                                                    <div>/${
                                                      drupalSettings.translation
                                                        .night
                                                    }</div>
                                                    `
                                                        : `
                                                    <div class="original_price"><span>${
                                                      drupalSettings.translation
                                                        .averageAmount
                                                    }</span>${numberWithCommas(
                                                            Math.round(
                                                              dataHotel.averageAmount
                                                            )
                                                          )} ${
                                                            dataHotel.currencyCode
                                                          }</div>
                                                    <div>/${
                                                      drupalSettings.translation
                                                        .night
                                                    }</div>
                                                    `
                                                    }

                                                    </div>
                                            </div>
                                            <a class="booking_btn"  target="_blank" href='${
                                              dataHotel.url
                                            }'>${$(".booking_t").text()}</a>
                                        </div>
                                    </div>
                                `;
        } else {
          skuHtml = `
                                    <div class="hotel-wrapper promo-wrapper hotel-api hotel-api-1">
                                        <div class="hotel-img-wrapper">
                                            <div id="carousel-${randomString}" class="carousel slide" data-ride="carousel" data-interval="false">
                                                <div class="carousel-inner">
                                                    ${dataHotel.images
                                                      .map(
                                                        (item, index) => `
                                                        <div class="carousel-item ${
                                                          index == 0
                                                            ? "active"
                                                            : ""
                                                        }">
                                                            <img class="w-100" data-src="${
                                                              "https://" +
                                                              item.url
                                                            }" src="${
                                                          "https://" + item.url
                                                        }" alt="anh khong gian phong">
                                                        </div>
                                                    `
                                                      )
                                                      .join("")}
                                                </div>
                                                <a class="carousel-control-prev" type="button" href="#carousel-${randomString}" data-slide="prev" style="width: 32px; height: 32px; margin: auto;">
                                                    <img src="../themes/porto/img/icons/prev.svg" height="32" width="32" aria-hidden="true" alt="icon prev">
                                                </a>
                                                <a class="carousel-control-next" type="button" href="#carousel-${randomString}" data-slide="next" style="width: 32px; height: 32px; margin: auto;">
                                                    <img src="../themes/porto/img/icons/next.svg" height="32" width="32" aria-hidden="true" alt="icon next">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="hotel-info-wrapper">
                                            <h5 class="hotel-title three_dots_2">${
                                              dataHotel.hotelName
                                            }</h5>
                                            <p class="addr three_dots_2">${
                                              dataHotel.address
                                            }</p>
                                            <h5 class="hotel-title three_dots_2">${
                                              dataHotel.name
                                            }</h5>
                                            <div class="info-block">
                                                <div class="block-left">
                                                    ${JSON.parse(
                                                      dataHotel.shortDescription
                                                    )
                                                      .map(
                                                        (item) => `
                                                                                            <div>
                                                                                                <img src='${item.Icon}'>
                                                                                                <span>${item.ShortDescription}</span>
                                                                                            </div>
                                                                                            `
                                                      )
                                                      .join("")}
                                                </div>
                                                <div class="block-right">
                                                ${
                                                  dataHotel.memberRate != null
                                                    ? `
                                                <div class="sale_price"><span>${
                                                  drupalSettings.translation
                                                    .averageAmount
                                                }</span>${numberWithCommas(
                                                        Math.round(
                                                          dataHotel.averageAmount
                                                        )
                                                      )} ${
                                                        dataHotel.currencyCode
                                                      }</div>
                                                <div class="original_price"><span>${
                                                  drupalSettings.translation
                                                    .memberRate
                                                }</span>${numberWithCommas(
                                                        Math.round(
                                                          dataHotel.memberRate
                                                        )
                                                      )} ${
                                                        dataHotel.currencyCode
                                                      }</div>
                                                <div>/${
                                                  drupalSettings.translation
                                                    .night
                                                }</div>
                                                `
                                                    : `
                                                <div class="original_price"><span>${
                                                  drupalSettings.translation
                                                    .averageAmount
                                                }</span>${numberWithCommas(
                                                        Math.round(
                                                          dataHotel.averageAmount
                                                        )
                                                      )} ${
                                                        dataHotel.currencyCode
                                                      }</div>
                                                <div>/${
                                                  drupalSettings.translation
                                                    .night
                                                }</div>
                                                `
                                                }
                                                    </div>
                                            </div>
                                            <a class="booking_btn"  target="_blank" href="${
                                              dataHotel.url
                                            }">${$(".booking_t").text()}</a>
                                        </div>
                                    </div>
                                `;
        }
        return skuHtml;
      }
      function skuHtmlRenderSibar(skuType, dataHotel) {
        let skuHtml = "";
        if (dataHotel.recommend_type == "2") {
          skuHtml = `
                                <div class="nfu-item">
                                    <div class="nfu-img img-fit">
                                        <a target="_blank" href="${
                                          dataHotel.url
                                        }">
                                            <img src="${
                                              "https://" +
                                              dataHotel.images[0].url
                                            }"/>
                                        </a>
                                    </div>
                                    <div class="nfu-info">
                                        <div class="price-hotel">
                                            ${
                                              dataHotel.memberRate != null
                                                ? `
                                            
                                            <div class="sale_price"><span>${
                                              drupalSettings.translation
                                                .priceFrom
                                            }</span> ${numberWithCommas(
                                                    Math.round(
                                                      dataHotel.memberRate
                                                    )
                                                  )} ${
                                                    dataHotel.currencyCode
                                                  } /${
                                                    drupalSettings.translation
                                                      .night
                                                  }</div>
                                            
                                            `
                                                : `
                                            <div class="sale_price"><span>${
                                              drupalSettings.translation
                                                .priceFrom
                                            }</span> ${numberWithCommas(
                                                    Math.round(
                                                      dataHotel.averageAmount
                                                    )
                                                  )} ${
                                                    dataHotel.currencyCode
                                                  } /${
                                                    drupalSettings.translation
                                                      .night
                                                  }</div>
                                            
                                            `
                                            }
                                        </div>
                                        <div class="name-hotel">
                                            ${dataHotel.name}
                                        </div>
                                    </div>
                                </div>
                                
                            `;
        } else {
          skuHtml = `
                                <div class="nfu-item">
                                    <div class="nfu-img img-fit">
                                        <a target="_blank" href="${
                                          dataHotel.url
                                        }">
                                            <img src="${
                                              "https://" +
                                              dataHotel.images[0].url
                                            }"/>
                                        </a>
                                    </div>
                                    <div class="nfu-info">
                                        <div class="price-hotel">
                                            ${
                                              dataHotel.memberRate != null
                                                ? `
                                            
                                            <div class="sale_price"><span>${
                                              drupalSettings.translation
                                                .priceFrom
                                            }</span> ${numberWithCommas(
                                                    Math.round(
                                                      dataHotel.memberRate
                                                    )
                                                  )} ${
                                                    dataHotel.currencyCode
                                                  } /${
                                                    drupalSettings.translation
                                                      .night
                                                  }</div>
                                            
                                            `
                                                : `
                                            <div class="sale_price"><span>${
                                              drupalSettings.translation
                                                .priceFrom
                                            }</span> ${numberWithCommas(
                                                    Math.round(
                                                      dataHotel.averageAmount
                                                    )
                                                  )} ${
                                                    dataHotel.currencyCode
                                                  } /${
                                                    drupalSettings.translation
                                                      .night
                                                  }</div>
                                            
                                            `
                                            }
                                        </div>
                                        <div class="name-hotel">
                                            ${dataHotel.hotelName}
                                        </div>
                                    </div>
                                </div>
                            `;
        }
        return skuHtml;
      }
      let getCookie = function (name) {
        let dc = document.cookie;
        let prefix = name + "=";
        let begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
        } else {
          begin += 2;
          var end = document.cookie.indexOf(";", begin);
          if (end == -1) {
            end = dc.length;
          }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
      };
      let gaUserId = getCookie("_ga");
      if (gaUserId) {
        let arrGa = gaUserId.split(".");
        gaUserId = arrGa[arrGa.length - 2] + "." + arrGa[arrGa.length - 1];
      }
      var hotelRecommen = [];
      let link = new URL(window.location.href);
      let location =
        $.inArray("full", locas) !== -1
          ? []
          : locas.length > 1 || locas.length == 0
          ? []
          : [locas[0]];
      let gaId = gaUserId == "" || gaUserId == null ? "GUEST" : gaUserId;
      let lang = drupalSettings.lang;
      (async () => {
        try {
          function render(hotelRecommen) {
            let listType = "sku";
            if ($(".sku-itemc").length > 0) {
              if (listType == null) {
                $(".sku-item").each(function (index) {
                  $(this).remove();
                });
              } else {
                $(".sku-item").each(function (index) {
                  index -= 1;
                  if (hotelRecommen[index] != undefined) {
                    let html = "";
                    $(this).html(html);
                  } else {
                    $(this).remove();
                  }
                });
              }
            } else {
              if (
                $(".page-node-type-news .container.detail .content>h2").length >
                  0 &&
                hotelRecommen != null
              ) {
                let headingList = $(
                  ".page-node-type-news .container.detail .content>h2"
                );
                let i = 0;
                headingList.each(function (index) {
                  if (hotelRecommen.length == 1) {
                    if (index == 1) {
                      $(this).before('<div class="sku-item"></div>');
                      let html = "";
                      if (listType == "sku") {
                        html = skuHtmlRender("promo", hotelRecommen[0]);
                      } else {
                        html = skuHtmlRender("hotel", hotelRecommen[0]);
                      }
                      i++;
                      $(this).prev().html(html);
                    }
                  } else {
                    if (index % 2 != 0) {
                      $(this).before('<div class="sku-item"></div>');
                      let html = "";
                      if (listType == "sku") {
                        html = skuHtmlRender("promo", hotelRecommen[i]);
                      } else {
                        html = skuHtmlRender("hotel", hotelRecommen[i]);
                      }
                      i++;
                      $(this).prev().html(html);
                    }
                  }
                });
              }
              if (
                $(".sku-hotel-block .sku-hotel-wrapper .nfu-item-wrapper")
                  .length > 0
              ) {
                if (hotelRecommen.length == 1) {
                  let html = "";
                  if (listType == "sku") {
                    html = skuHtmlRenderSibar("promo", hotelRecommen[0]);
                  } else {
                    html = skuHtmlRenderSibar("hotel", hotelRecommen[0]);
                  }
                  $(
                    ".sku-hotel-block .sku-hotel-wrapper .nfu-item-wrapper"
                  ).append(html);
                } else {
                  for (let i = 0; i < hotelRecommen.length; i++) {
                    let html = "";
                    if (listType == "sku") {
                      html = skuHtmlRenderSibar("promo", hotelRecommen[i]);
                    } else {
                      html = skuHtmlRenderSibar("hotel", hotelRecommen[i]);
                    }
                    $(
                      ".sku-hotel-block .sku-hotel-wrapper .nfu-item-wrapper"
                    ).append(html);
                  }
                }
              }
            }
          }
          async function apiHotelRecommend() {
            return new Promise((resolve, reject) => {
              const xhttp = new XMLHttpRequest();
              xhttp.onload = function () {
                if (this.status === 200) {
                  let result = this.responseText;
                  result = JSON.parse(result);
                  let currentTime = new Date().getTime();
                  let expirationTime = currentTime + 60000 * 2;
                  localStorage.setItem(
                    gaId + location.join() + locationByRegex.join("-") + lang,
                    JSON.stringify({ data: result.data, time: expirationTime })
                  );
                  resolve(result.data);
                } else {
                  reject(new Error("Request failed"));
                }
              };
              const url =
                "https://ott.vinpearl.com/data-vp-hotel-recommend/HotelRecomendation";
              const params = {
                gaID: gaId,
                url: "https://vinpearl.com" + link.pathname,
                location: location,
                articleType: "1",
                language: lang,
                locationByRegex: locationByRegex,
              };
              xhttp.open("POST", url, true);
              xhttp.setRequestHeader("Content-type", "application/json");
              xhttp.setRequestHeader("Accept", "application/json");
              xhttp.send(JSON.stringify(params));
            });
          }
          let currentTime = new Date().getTime();
          let hotelRecommed = JSON.parse(
            localStorage.getItem(
              gaId + location.join() + locationByRegex.join("-") + lang
            )
          );
          if (hotelRecommed && currentTime <= parseInt(hotelRecommed.time)) {
            render(hotelRecommed.data);
          } else {
            localStorage.removeItem(
              gaId + location.join() + locationByRegex.join("-") + lang
            );
            render(await apiHotelRecommend());
          }
          setTimeout(function () {
            Drupal.recommendation.productGA($(".news-block .sku-item"));
          }, 0);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
  Drupal.recommendation.getRecommendationData = function (
    parent,
    place,
    callback = null
  ) {
    let getCookie = function (name) {
      let dc = document.cookie;
      let prefix = name + "=";
      let begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
          end = dc.length;
        }
      }
      return decodeURI(dc.substring(begin + prefix.length, end));
    };
    let thousandFormat = function (number, decimal_point) {
      if (decimal_point == undefined) {
        decimal_point = ",";
      }
      number += "";
      x = number.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + decimal_point + "$2");
      }
      return x1 + x2;
    };
    let markupRender = function (place, data) {
      let markup = "";
      switch (place) {
        case "homepage":
          markup += '<div class="recommendation-block">';
          markup += '  <div class="container">';
          markup +=
            '    <h2 class="homepage-tit wow animate__animated animate__fadeInUp">' +
            drupalSettings.translation.productForU +
            "</h2>";
          markup +=
            '    <div class="recommend-wrapper ht_relative wow animate__animated animate__fadeInUp">';
          markup += '      <div class="swiper-container recommend-slider">';
          markup += '        <div class="swiper-wrapper">';
          for (let i in data.result) {
            if (data.result[i].tagGroupDestinations != null) {
              let item = data.result[i];
              let sale_price = 0;
              if (
                item.originalPrice &&
                item.salePrice &&
                item.originalPrice != item.salePrice
              ) {
                sale_price = 100 - (item.salePrice * 100) / item.originalPrice;
              }
              if (item.productType != 5) {
                url_lv1 = "/tour";
              } else {
                url_lv1 = "/experience";
              }
              markup +=
                '<div class="swiper-slide" data-name="' +
                item.name +
                '" data-id="' +
                item.id +
                '" data-src_image="https://' +
                item.thumbImageView.fileUri +
                '" data-price="' +
                item.salePrice +
                '" data-brand="tbd" data-category="tbd" data-list="Recommendation_Products_For_You" data-position="' +
                (i + 1) +
                '" data-dimension29="tbd" data-dimension30="' +
                item.name +
                '" data-dimension31="' +
                Math.round(item.salePrice) +
                '" data-dimension32="' +
                thousandFormat(sale_price, ".") +
                '" data-eid="' +
                item.code +
                '" >';
              markup += '  <div class="item-wrapper">';
              markup += '    <div class="img-wrapper">';
              if (sale_price != 0) {
                markup +=
                  '  <div class="sale-tag">' +
                  "-" +
                  parseInt(thousandFormat(sale_price)) +
                  "%</div>";
              }
              markup +=
                '      <a href="' +
                drupalSettings.hms_booking_domain_book +
                url_lv1 +
                "/" +
                item.urlSlug +
                '" target="_blank">';
              markup +=
                '        <img class="lazyload" data-src ="https://' +
                item.thumbImageView.fileUri +
                '" alt="vinpearl" width="273" height="350">';
              markup += "      </a>";
              markup += "    </div>";
              markup += "  </div>";
              markup += '  <div class="item-info">';
              markup +=
                '    <a href="' +
                drupalSettings.hms_booking_domain_book +
                url_lv1 +
                "/" +
                item.urlSlug +
                '" target="_blank"><h3 class="item-title three_dots_2">' +
                item.name +
                "</h3></a>";
              markup += '    <div class="price-wrapper">';
              markup +=
                '      <div class="sale-price">' +
                thousandFormat(Math.round(item.salePrice), ".") +
                "VND</div>";
              if (sale_price != 0) {
                markup +=
                  '      <div class="original-price">' +
                  thousandFormat(Math.round(item.originalPrice), ".") +
                  "VND</div>";
              }
              markup += "    </div>";
              markup +=
                '    <div class="convert-price-wrapper product-for-you-homepage">';
              markup +=
                '      <div class="sale-price" convert-value="' +
                Math.round(item.salePrice) +
                '"></div>';
              if (sale_price != 0) {
                markup +=
                  '      <div class="original-price"  convert-value="' +
                  Math.round(item.originalPrice) +
                  '"></div>';
              }
              markup += "    </div>";
              markup += "  </div>";
              markup += "</div>";
            }
          }
          markup += "        </div>";
          markup += "      </div>";
          markup += '      <div class="custom-pagination w100">';
          markup += '        <div class="swiper-pagination recommend"></div>';
          markup += "      </div>";
          markup +=
            '      <div class="custom-navigation recommend-slide-nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>';
          markup += "    </div>";
          markup += "  </div>";
          markup += "</div>";
          break;
        case "other":
          if (data.result != "") {
            markup += '      <div class="swiper-container rd-slider">';
            markup += '        <div class="swiper-wrapper">';
            for (let i in data.result) {
              let item = data.result[i];
              let sale_price = 0;
              if (
                item.originalPrice &&
                item.salePrice &&
                item.originalPrice != item.salePrice
              ) {
                sale_price = 100 - (item.salePrice * 100) / item.originalPrice;
              }
              if (item.productType != 5) {
                url_lv1 = "/tour";
              } else {
                url_lv1 = "/experience";
              }
              markup +=
                '<div class="swiper-slide" data-name="' +
                item.name +
                '" data-id="' +
                item.id +
                '" data-src_image="https://' +
                item.thumbImageView.fileUri +
                '" data-price="' +
                item.salePrice +
                '" data-brand="tbd" data-category="tbd" data-list="Recommendation_Products_For_You" data-position="' +
                (i + 1) +
                '" data-dimension29="tbd" data-dimension30="' +
                item.name +
                '" data-dimension31="' +
                item.originalPrice +
                '" data-dimension32="' +
                thousandFormat(sale_price, ".") +
                '" data-eid="' +
                item.code +
                '" >';
              markup += '  <div class="item-wrapper">';
              markup += '    <div class="img-wrapper">';
              if (sale_price != 0) {
                markup +=
                  '  <div class="sale-tag">' +
                  "-" +
                  parseInt(thousandFormat(sale_price)) +
                  "%</div>";
              }
              markup +=
                '      <a href="' +
                drupalSettings.hms_booking_domain_book +
                url_lv1 +
                "/" +
                item.urlSlug +
                '" target="_blank">';
              markup +=
                '        <img class="lazyload" data-src ="https://' +
                item.thumbImageView.fileUri +
                '" alt="vinpearl" width="273" height="350">';
              markup += "      </a>";
              markup += "    </div>";
              markup += "  </div>";
              markup += '  <div class="item-info">';
              markup +=
                '     <a href="' +
                drupalSettings.hms_booking_domain_book +
                url_lv1 +
                "/" +
                item.urlSlug +
                '" target="_blank">';
              markup +=
                '      <h3 class="item-title three_dots_2" title="' +
                item.name +
                '">' +
                item.name +
                "</h3>";
              markup += "    </a>";
              markup += '    <div class="info-wrapper">';
              markup += '      <div class="info-left">';
              if (item.tour_duration != null) {
                let time = item.tour_duration.split(".");
                markup += '        <div class="time">';
                if (time[0] != null) {
                  markup +=
                    time[0] + " " + drupalSettings.translation.day + " ";
                }
                if (time[1] != null && time[1] != 0) {
                  markup += time[1] + " " + drupalSettings.translation.day;
                }
                markup += "        </div>";
              }
              markup += "      </div>";
              markup += '      <div class="info-right">';
              markup += '        <div class="original-price">';
              if (item.originalPrice && item.originalPrice != item.salePrice) {
                markup +=
                  thousandFormat(Math.round(item.salePrice), ".") + " VND";
              }
              markup += "        </div>";
              markup += '        <div class="sale-price">';
              if (item.salePrice) {
                markup +=
                  thousandFormat(Math.round(item.salePrice), ".") + " VND";
              } else {
                markup +=
                  thousandFormat(Math.round(item.originalPrice), ".") + " VND";
              }
              markup += "        </div>";
              markup += "      </div>";
              markup +=
                '      <div class="convert-price-wrapper detail-hotel">';
              if (item.salePrice) {
                markup +=
                  '    <div class="sale-price" convert-value="' +
                  Math.round(item.salePrice) +
                  '"></div>';
              } else {
                markup +=
                  '    <div class="sale-price" convert-value="' +
                  Math.round(item.originalPrice) +
                  '"></div>';
              }
              if (item.originalPrice && item.originalPrice != item.salePrice) {
                markup +=
                  '    <div class="original-price" convert-value="' +
                  Math.round(item.salePrice) +
                  '"></div>';
              }
              markup += "      </div>";
              markup += "    </div>";
              markup += "  </div>";
              markup += "</div>";
            }
            markup += "        </div>";
            markup += "      </div>";
            markup += '      <div class="rd-nav">';
            markup +=
              '        <div class="swiper-button-next rd-slider-button-next"></div>';
            markup +=
              '        <div class="swiper-button-prev rd-slider-button-prev"></div>';
            markup += "      </div>";
          } else {
            markup +=
              '<p class="no-data"><b>' +
              drupalSettings.translation.dataIsUpdating +
              "</b></p>";
          }
          break;
        case "hot_promo":
          if ($(".promo-block.sku-promo-api.nfu-block").length != 0) {
            for (let i in data.result) {
              if (i <= 2) {
                let item = data.result[i];
                let sale_price = 0;
                if (
                  item.originalPrice &&
                  item.salePrice &&
                  item.originalPrice != item.salePrice
                ) {
                  sale_price =
                    100 - (item.salePrice * 100) / item.originalPrice;
                }
                if (item.productType != 5) {
                  url_lv1 = "/tour";
                } else {
                  url_lv1 = "/experience";
                }
                markup +=
                  '<div class="nfu-item" data-name="' +
                  item.name +
                  '" data-id="' +
                  item.id +
                  '" data-price="' +
                  Math.round(item.salePrice) +
                  '" data-brand="tbd" data-category="tbd" data-list="Best_Offers_Products" data-position="' +
                  (i + 1) +
                  '" data-dimension29="tbd" data-dimension30="' +
                  item.name +
                  '" data-dimension31="' +
                  Math.round(item.salePrice) +
                  '" data-dimension32="' +
                  thousandFormat(sale_price, ".") +
                  '" data-eid="' +
                  item.eid +
                  '">';
                markup += '  <div class="nfu-img img-fit">';
                markup +=
                  '      <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank">';
                markup +=
                  '    <img src="https://' +
                  item.thumbImageView.fileUri +
                  '" alt="' +
                  item.alt +
                  '"></a>';
                markup += "  </div>";
                markup += '  <div class="nfu-info">';
                markup += '    <div class="price">';
                markup +=
                  '      <p class="ht_reset_margin">' +
                  drupalSettings.translation.priceFrom +
                  " <span>" +
                  thousandFormat(Math.round(item.salePrice), ".") +
                  ' VND</span> <span class="convert-price-wrapper sku-for-u" convert-value="' +
                  Math.round(item.salePrice) +
                  '"></span></p>';
                markup += "    </div>";
                markup +=
                  '    <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank"><p class="ht_reset_margin three_dots_2">' +
                  item.name +
                  "</p></a>";
                markup += "  </div>";
                markup += "</div>";
              }
            }
          } else {
            for (let i in data.result) {
              if (i <= 5) {
                let item = data.result[i];
                let sale_price = 0;
                if (
                  item.originalPrice &&
                  item.salePrice &&
                  item.originalPrice != item.salePrice
                ) {
                  sale_price =
                    100 - (item.salePrice * 100) / item.originalPrice;
                }
                if (item.productType != 5) {
                  url_lv1 = "/tour";
                } else {
                  url_lv1 = "/experience";
                }
                markup +=
                  '<div class="nfu-item" data-name="' +
                  item.name +
                  '" data-id="' +
                  item.id +
                  '" data-price="' +
                  Math.round(item.salePrice) +
                  '" data-brand="tbd" data-category="tbd" data-list="Best_Offers_Products" data-position="' +
                  (i + 1) +
                  '" data-dimension29="tbd" data-dimension30="' +
                  item.name +
                  '" data-dimension31="' +
                  Math.round(item.salePrice) +
                  '" data-dimension32="' +
                  thousandFormat(sale_price, ".") +
                  '" data-eid="' +
                  item.eid +
                  '">';
                markup += '  <div class="nfu-img img-fit">';
                markup +=
                  '      <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank">';
                markup +=
                  '    <img src="https://' +
                  item.thumbImageView.fileUri +
                  '" alt="' +
                  item.alt +
                  '"></a>';
                markup += "  </div>";
                markup += '  <div class="nfu-info">';
                markup += '    <div class="price">';
                markup +=
                  '      <p class="ht_reset_margin">' +
                  drupalSettings.translation.priceFrom +
                  " <span>" +
                  thousandFormat(Math.round(item.salePrice), ".") +
                  ' VND</span> <span class="convert-price-wrapper sku-for-u" convert-value="' +
                  Math.round(item.salePrice) +
                  '"></span></p>';
                markup += "    </div>";
                markup +=
                  '    <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank"><p class="ht_reset_margin three_dots_2">' +
                  item.name +
                  "</p></a>";
                markup += "  </div>";
                markup += "</div>";
              }
            }
          }
          break;
        case "nt_complex_tour_block":
          if (data.result != "") {
            markup += '      <div class="swiper-container rd-slider">';
            markup += '        <div class="swiper-wrapper">';
            for (let i in data.result) {
              if (data.result[i].tagGroupDestinations != null) {
                let item = data.result[i];
                let sale_price = 0;
                if (
                  item.originalPrice &&
                  item.salePrice &&
                  item.originalPrice != item.salePrice
                ) {
                  sale_price =
                    100 - (item.salePrice * 100) / item.originalPrice;
                }
                if (item.productType != 5) {
                  url_lv1 = "/tour";
                } else {
                  url_lv1 = "/experience";
                }
                markup +=
                  '<div class="swiper-slide" data-name="' +
                  item.name +
                  '" data-id="' +
                  item.id +
                  '" data-src_image="https://' +
                  item.thumbImageView.fileUri +
                  '" data-price="' +
                  item.salePrice +
                  '" data-brand="tbd" data-category="tbd" data-list="Recommendation_Products_For_You" data-position="' +
                  (i + 1) +
                  '" data-dimension29="tbd" data-dimension30="' +
                  item.name +
                  '" data-dimension31="' +
                  item.originalPrice +
                  '" data-dimension32="' +
                  thousandFormat(sale_price, ".") +
                  '" data-eid="' +
                  item.code +
                  '" >';
                markup += '  <div class="item-wrapper">';
                markup += '    <div class="img-wrapper">';
                if (sale_price != 0) {
                  markup +=
                    '  <div class="sale-tag">' +
                    "-" +
                    parseInt(thousandFormat(sale_price)) +
                    "%</div>";
                }
                markup +=
                  '      <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank">';
                markup +=
                  '        <img class="lazyload" data-src ="https://' +
                  item.thumbImageView.fileUri +
                  '" alt="vinpearl" width="273" height="350">';
                markup += "      </a>";
                markup += "    </div>";
                markup += "  </div>";
                markup += '  <div class="item-info">';
                markup +=
                  '    <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank">';
                markup +=
                  '      <h3 class="item-title three_dots_2" title="' +
                  item.name +
                  '">' +
                  item.name +
                  "</h3>";
                markup += "    </a>";
                markup += '    <div class="info-wrapper">';
                markup +=
                  '      <div class="tour-code">' +
                  drupalSettings.translation.tour_code +
                  " <span>" +
                  item.code +
                  "</span></div>";
                markup += '      <div class="info-left">';
                markup += '        <div class="original-price">';
                if (
                  item.originalPrice &&
                  item.originalPrice != item.salePrice
                ) {
                  markup += thousandFormat(item.originalPrice, ".") + "VND";
                }
                markup += "        </div>";
                markup += '        <div class="sale-price three_dots_1">';
                if (item.salePrice) {
                  markup +=
                    thousandFormat(item.salePrice, ".") +
                    "VND<span>/ " +
                    drupalSettings.translation.people +
                    "</span>";
                } else {
                  markup +=
                    thousandFormat(item.originalPrice, ".") +
                    "VND<span>/ " +
                    drupalSettings.translation.people +
                    "</span>";
                }
                markup += "        </div>";
                markup += "      </div>";
                markup += '      <div class="info-right">';
                markup +=
                  '        <a href="' +
                  drupalSettings.hms_booking_domain_book +
                  url_lv1 +
                  "/" +
                  item.urlSlug +
                  '" target="_blank">' +
                  drupalSettings.translation.book +
                  "</a>";
                markup += "      </div>";
                markup += "    </div>";
                markup += "  </div>";
                markup += "</div>";
              }
            }
            markup += "        </div>";
            markup += "      </div>";
            markup += '      <div class="rd-nav">';
            markup +=
              '        <div class="swiper-button-next rd-slider-button-next"></div>';
            markup +=
              '        <div class="swiper-button-prev rd-slider-button-prev"></div>';
            markup += "      </div>";
          } else {
            markup +=
              '<p class="no-data"><b>' +
              drupalSettings.translation.dataIsUpdating +
              "</b></p>";
          }
          break;
      }
      return markup;
    };
    let gaUserId = getCookie("_ga");
    if (gaUserId) {
      let arrGa = gaUserId.split(".");
      gaUserId = arrGa[arrGa.length - 2] + "." + arrGa[arrGa.length - 1];
    }
    let api_domain = drupalSettings.hms_api_recommendation;
    let api_destination_domain =
      drupalSettings.hms_api_recommendation_destination;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      let data = this.responseText;
      data = JSON.parse(data);
      if ($(parent).length) {
        let markup = markupRender(place, data.data);
        $(parent).html(markup);
      }
      if (typeof callback == "function") {
        callback(data);
      }
    };
    if (drupalSettings.destination) {
      xhttp.open(
        "GET",
        api_destination_domain +
          "?TagDestination=" +
          drupalSettings.destination +
          "&ClientId=" +
          gaUserId,
        true
      );
    } else {
      xhttp.open("GET", api_domain + "?ClientId=" + gaUserId, true);
    }
    xhttp.setRequestHeader("Accept-Language", drupalSettings.hms_langcode);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
  };
  Drupal.recommendation.getArticleData = function (values, callback = null) {
    var renderHotNews = function (data) {
      let timestampToDate = function (seconds) {
        var dateFormat = new Date(seconds * 1000);
        return (
          dateFormat.getDate() +
          "/" +
          (dateFormat.getMonth() + 1) +
          "/" +
          dateFormat.getFullYear()
        );
      };
      let thousand_format = function (number, decimal_point) {
        if (decimal_point == undefined) {
          decimal_point = ",";
        }
        number += "";
        x = number.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + decimal_point + "$2");
        }
        return x1 + x2;
      };
      let html = "",
        count = 0;
      html +=
        '<div class="main-body-tit"><h2>' +
        drupalSettings.translation.hotNewsTitle +
        "</h2></div>";
      html += '  <div class="nfu-item-wrapper">';
      for (let i in data) {
        if (
          count <= 2 &&
          data[i].url.includes("/" + drupalSettings.lang + "/") &&
          data[i].url != "" &&
          data[i].thumb != "" &&
          data[i].created != "" &&
          data[i].views != "" &&
          data[i].title != ""
        ) {
          let item = data[i];
          count++;
          html +=
            '<div class="nfu-item" data-eid="' +
            item.eid +
            '" data-list="article_for_you" data-position="' +
            i +
            '" data-name="' +
            item.title +
            '" data-id="' +
            item.id +
            '" >';
          html += '  <div class="nfu-img img-fit">';
          html +=
            '    <a href="' +
            item.url +
            '" target="_blank"><img src="' +
            item.thumb +
            '"></a>';
          html += "  </div>";
          html += '  <div class="nfu-info">';
          html += '    <div class="date_n_view">';
          html +=
            '      <div class="date">' +
            timestampToDate(item.created) +
            "</div>";
          html +=
            '      <div class="view">' + thousand_format(item.views) + "</div>";
          html += "    </div>";
          html +=
            '    <p class="ht_reset_margin three_dots_2">' +
            item.title +
            "</p>";
          html += "  </div>";
          html += "</div>";
        }
      }
      html += "  </div>";
      html += "</div>";
      return html;
    };
    let getCookie = function (name) {
      let dc = document.cookie;
      let prefix = name + "=";
      let begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
          end = dc.length;
        }
      }
      return decodeURI(dc.substring(begin + prefix.length, end));
    };
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      let rawData = this.responseText;
      data = JSON.parse(rawData);
      if ($(values["parent"]).length) {
        $(values["parent"]).html(renderHotNews(data.result));
      }
      if (typeof callback == "function") {
        callback(rawData);
      }
    };
    let gaUserId = getCookie("_ga");
    if (gaUserId) {
      let arrGa = gaUserId.split(".");
      gaUserId = arrGa[arrGa.length - 2] + "." + arrGa[arrGa.length - 1];
    }
    let params = {
      requestType: "CONTENT_RECOMMEND",
      customerID: gaUserId == "" || gaUserId == null ? "GUEST" : gaUserId,
      location: locationByRegex.length > 0 ? locationByRegex.toString() : "",
    };
    xhttp.open(
      "POST",
      "https://ott.vinpearl.com/data-vp-smart-recommend/GetLogic",
      true
    );
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(params));
  };
  Drupal.recommendation.getHotDesData = function (values, callback = null) {
    let getCookie = function (name) {
      let dc = document.cookie;
      let prefix = name + "=";
      let begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
          end = dc.length;
        }
      }
      return decodeURI(dc.substring(begin + prefix.length, end));
    };
    let renderHotPlace = function (data) {
      let html = "";
      for (let i in data) {
        html +=
          '<div class="hotDes-item" data-list="destination_for_you" data-position="' +
          (i + 1) +
          '" data-name="' +
          data[i].title +
          '">';
        html += '  <div class="img-wrapper img-fit">';
        html +=
          '    <img src="' +
          data[i].thumbnail +
          '" alt="' +
          data[i].title +
          '">';
        html += "  </div>";
        html +=
          '  <span><a href="' +
          data[i].url +
          '" target="_blank">' +
          data[i].title +
          "</a></span>";
        html += "</div>";
      }
      return html;
    };
    if (!values["reload"]) {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        let rawData = this.responseText;
        data = JSON.parse(rawData);
        if ($(values["parent"]).length) {
          $(values["parent"]).html(renderHotPlace(data));
        }
        if (typeof callback == "function") {
          callback(rawData);
        }
      };
      let gaUserId = getCookie("_ga");
      console.log(gaUserId);
      xhttp.open(
        "GET",
        "/" +
          drupalSettings.path.pathPrefix +
          "api/recommendations?place=hotDes&gaid=" +
          gaUserId,
        true
      );
      xhttp.send();
    } else {
      let data = values["rawData"];
      data = JSON.parse(data);
      $(values["parent"]).html(renderHotPlace(data));
    }
  };
  Drupal.recommendation.hotNewsAndPlace = function () {
    function setCookie(name, value) {
      let expires = "";
      let date = new Date();
      date.setTime(date.getTime() + 60 * 1000);
      expires = "; expires=" + date.toUTCString();
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    if ($(".news-sidebar .news-block").length > 0) {
      Drupal.recommendation.getArticleData(
        { parent: ".news-sidebar .news-block", reload: false },
        function (data) {}
      );
    }
    if ($(".news-sidebar .hotDes").length) {
      if (
        getCookie("hot_place") == null ||
        getCookie("currentLang") == null ||
        getCookie("currentLang") != drupalSettings.path.currentLanguage
      ) {
        console.log("Call Hot Place API");
        Drupal.recommendation.getHotDesData(
          { parent: ".news-sidebar .hotDes-wrapper", reload: false },
          function (data) {
            setCookie("hot_place", data);
          }
        );
      } else {
        Drupal.recommendation.getHotDesData({
          parent: ".news-sidebar .hotDes-wrapper",
          reload: true,
          rawData: getCookie("hot_place"),
        });
      }
    }
  };
  Drupal.recommendation.ntComplexTourBlock = function () {
    if ($(".promo_complex").length) {
      Drupal.recommendation.getRecommendationData(
        ".tours-block .tours-block-body",
        "nt_complex_tour_block",
        function (recommendationData) {
          $("img.lazyload").lazyload({ effect: "fadeIn" });
          var swiper = new Swiper(
            ".tours-block .tours-block-body .swiper-container",
            {
              slidesPerView: 3,
              spaceBetween: 15,
              navigation: {
                nextEl: ".tours-block .swiper-button-next",
                prevEl: ".tours-block .swiper-button-prev",
              },
              breakpoints: {
                0: { slidesPerView: "auto", spaceBetween: 17 },
                481: { slidesPerView: 3, spaceBetween: 15 },
              },
            }
          );
        }
      );
    }
  };
  Drupal.recommendation.hotelApi = function () {
    if ($(".hotel-api").length > 0) {
      $(".hotel-api").each(function () {
        let idHotel = $(this).find($(".hotel-info-wrapper")).attr("id");
        let url = $(this)
          .find("#" + idHotel)
          .attr("url");
        $(this).find($("a.booking_btn")).attr("href", url);
      });
    }
  };
})(jQuery, Drupal);
