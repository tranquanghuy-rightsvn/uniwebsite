function convertTitle(title) {
  title = title.replace(/ /g, '-').toLowerCase();
  title = title.replace(/[áàảãạăắẳẵặằâấầẩẫậ]/g, 'a');
  title = title.replace(/[èéẻẽẹêềếểễệ]/g, 'e');
  title = title.replace(/[iìỉíịĩ]/g, 'i');
  title = title.replace(/[ýỳỷỹỵ]/g, 'y');
  title = title.replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o');
  title = title.replace(/[ưừứựửữùúủũụ]/g, 'u');
  title = title.replace(/[đ]/g, 'd');

  title = title.split('').filter(function (cha) {
    return 'qwertyuiopasdfghjklzxcvbnm-0123456789'.includes(cha);
  }).join('');

  return title;
}

document.addEventListener("turbolinks:load", () => {
  $("input#product_chaos_news_title").on('input', function() {
    $('input#product_chaos_news_url').val(convertTitle($('input#product_chaos_news_title').val()) + ".html")
  });
});
