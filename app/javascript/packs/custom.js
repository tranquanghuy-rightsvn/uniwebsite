function convertTitle(title) {
  title = title.replace(/ /g, '-').toLowerCase();

  title = title.split('').filter(function (cha) {
    return 'đáàảãạăắẳẵặằâấầẩẫậèéẻẽẹêềếểễệiìỉíịĩýỳỷỹỵòóỏõọôồốổỗộơờớởỡợưừứựửữùúủũụqwertyuiopasdfghjklzxcvbnm-0123456789'.includes(cha);
  }).join('');

  return title;
}

document.addEventListener("turbolinks:load", () => {
  $("input#product_websitegiare_title").on('input', function() {
    $('#url-display-field').val(convertTitle($('input#product_websitegiare_title').val()) + ".html")
    $('#url-hidden-field').val(convertTitle($('input#product_websitegiare_title').val()) + ".html")
  });

  $('#keywords-field').on('input', function() {
    $('input#product_websitegiare_keywords').val(JSON.stringify($('#keywords-field').val().split(",").map((key) => { return key.trim() })))
  })

  let current_url = $("input#product_websitegiare_title").val() ? convertTitle($('input#product_websitegiare_title').val()) + ".html" : ""

  $('#url-display-field').val(current_url)

  let current_value = $('input#product_websitegiare_keywords').val() ? JSON.parse($('input#product_websitegiare_keywords').val()).join(", ") : ""
  $('#keywords-field').val(current_value)
});
