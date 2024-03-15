function ht_call_ajax(e, o = {}, n) {
  jQuery.ajax({
    type: "GET",
    url: e,
    data: o,
    dataType: "json",
    success: function (e) {
      "function" == typeof n && n(e);
    },
    error: function (e) {
      "function" == typeof n && n("error");
    },
  });
}
var ht_custom_loading_modal = (e) => {
  if (!jQuery("head style.custom_loading_modal").length) {
    jQuery("head").append(
      '<style class="custom_loading_modal">.loading_modal{display:none;z-index:1000000;top: 0;background-color:rgb(51 51 51 / .5);position:fixed;width:100vw;height:100vh}.loading_modal .spinner_wrapper{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.spinner{width:55px;display:flex;justify-content:space-between}.spinner>div{width:15px;height:15px;background-color:white;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}</style>'
    );
  }
  if (!jQuery(e).find(".loading_modal").length) {
    let o =
      '<div class="loading_modal"><div class="spinner_wrapper"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>';
    jQuery(e).append(o),
      jQuery(document).ajaxStart(function () {
        jQuery(e).find(".loading_modal").fadeIn(300);
      }),
      jQuery(document).ajaxStop(function () {
        jQuery(e).find(".loading_modal").fadeOut(300);
      });
  }
};
function ht_dialog_box(e, o, n, i) {
  if (
    (jQuery("#dialog-box").length && jQuery("#dialog-box").remove(),
    jQuery("#dialog-box-overlay").length &&
      jQuery("#dialog-box-overlay").remove(),
    "yn_dialog" == n)
  )
    var t = jQuery(
      '<div id="dialog-box"><div class="popup-header"><h2>' +
        e +
        '</h2></div><div class="popup-body">' +
        o +
        '</div><div class="buttons"><button class="btn btn-default btn-inline" name="submit">Thực hiện</button><button class="btn btn-inline" onclick="ht_dialog_box_close();">Đóng</button></div></div>'
    );
  else
    t = jQuery(
      '<div id="dialog-box"><div class="popup-header"><h2>' +
        e +
        '</h2></div><div class="popup-body">' +
        o +
        '</div><div class="buttons"><button class="btn btn-inline" onclick="ht_dialog_box_close();">Đóng</button></div></div>'
    );
  var a = jQuery(
    '<div id="dialog-box-overlay" style="background-color: #000; opacity: 0.5; z-index: 1000; position: fixed; width: 100%; height: 100%; top: 0; left: 0;"></div>'
  );
  t.css({
    backgroundColor: "#fff",
    zIndex: 1001,
    position: "fixed",
    width: 320,
    height: "auto",
    left: (jQuery(window).width() - 320) / 2,
    borderRadius: 5,
    overflow: "hidden",
  }),
    t.hide(),
    a.hide(),
    t.find('button[name="submit"]').click(function () {
      "function" == typeof i && i(t);
    }),
    jQuery("body").append(a),
    jQuery("body").append(t);
  jQuery(window).height(), jQuery(t).height();
  t.css({ display: "none", top: "50%", transform: "translateY(-50%)" }),
    a.fadeIn("fast", function () {
      t.fadeIn(300);
    });
}
function ht_dialog_box_close() {
  jQuery("#dialog-box").fadeOut(300),
    jQuery("#dialog-box-overlay").fadeOut(function () {
      jQuery("#dialog-box-overlay").remove(), jQuery("#dialog-box").remove();
    });
}
var ht_ht_thousand_format = (e, o) => {
  null == o && (o = ","),
    (x = (e += "").split(".")),
    (x1 = x[0]),
    (x2 = x.length > 1 ? "." + x[1] : "");
  for (var n = /(\d+)(\d{3})/; n.test(x1); )
    x1 = x1.replace(n, "$1" + o + "$2");
  return x1 + x2;
};
function ht_smooth_scroll_a_tag_click() {
  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault(),
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        500
      );
  });
}
function checkImage(e, o) {
  var n = new Image();
  (n.onload = function () {
    if (this.width > 0) {
      "function" == typeof o && o(1);
    }
  }),
    (n.onerror = function () {
      "function" == typeof o && o(0);
    }),
    (n.src = e);
}
function obsesrver(e, o) {
  return !1;
}
function getParamsUrl(e) {
  let o = window.location.search;
  return new URLSearchParams(o).get(e);
}
function nonAccentVietnamese(e) {
  return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
    e.toLowerCase()).replace(
    /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
    "a"
  )).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(
    /ì|í|ị|ỉ|ĩ/g,
    "i"
  )).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(
    /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
    "u"
  )).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(
    /\u0300|\u0301|\u0303|\u0309|\u0323/g,
    ""
  )).replace(/\u02C6|\u0306|\u031B/g, ""));
}
