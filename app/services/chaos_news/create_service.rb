class Product::CreateService
  attr_accessor :resource

  def initialize resource
    @resource = resource
  end

  def perform
    content = "<!DOCTYPE html><html><head><meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><title>Page Title</title><meta name='viewport' content='width=device-width, initial-scale=1'><link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.css\"></head><body><div class=\"nav\"><div class=\"container\"><h2>HAY TIN</h2></div></div><div class=\"container main\"><div class=\"article\"><p class=\"posted-date\">"
    content += resource.created_at.to_s
    content += "</p>
      <h1>" + resource.title + "</h1>
      <div class=\"content\">"  + resource.content.body.to_s.gsub(/<action-text-attachment[^>]*>[^<]*<\/action-text-attachment>/, '') +

      "</div>

      <div class=\"relative\">
        <h3> Tin liên quan</h3>

        <div class=\"box-shadow box-news-rlt\">
          <div class=\"image-news-rlt\">
            <img src=\"https://icdn.24h.com.vn/upload/3-2023/images/2023-09-30/vuh8074-16960338171131676717926-1696039762-911-width640height427.jpeg\">
            <a href=\"tan-miss-university-viet-nam-noi-gi-ve-tin-don-mua-giai.html\">
              <div class=\"title-news\">
                <h6>Tân Miss Universe Vietnam nói gì về tin đồn mua giải?</h6>
              </div>
            </a>
            </div>
        </div>

        <div class=\"box-shadow box-news-rlt\">
          <div class=\"image-news-rlt\">
            <img src=\"https://icdn.24h.com.vn/upload/3-2023/images/2023-09-30/vuh8074-16960338171131676717926-1696039762-911-width640height427.jpeg\">
            <a href=\"tan-miss-university-viet-nam-noi-gi-ve-tin-don-mua-giai.html\">
              <div class=\"title-news\">
                <h6>Tân Miss Universe Vietnam nói gì về tin đồn mua giải?</h6>
              </div>
            </a>
            </div>
        </div>

        <div class=\"box-shadow box-news-rlt\">
          <div class=\"image-news-rlt\">
            <img src=\"https://icdn.24h.com.vn/upload/3-2023/images/2023-09-30/vuh8074-16960338171131676717926-1696039762-911-width640height427.jpeg\">
            <a href=\"tan-miss-university-viet-nam-noi-gi-ve-tin-don-mua-giai.html\">
              <div class=\"title-news\">
                <h6>Tân Miss Universe Vietnam nói gì về tin đồn mua giải?</h6>
              </div>
            </a>
            </div>
        </div>

      </div>
    </div>
  </div>

  <script type=\"text/javascript\" src=\"./javascript/index.js\"></script>
</body>
</html>
"

    File.write("projects/chaos_news/" + resource.url, content)


    content_index = "<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\" crossorigin=\"anonymous\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.css\">
</head>
<body>
  <div class=\"nav\">
    <div class=\"container\">
      <h2>HAY TIN</h2>
    </div>
  </div>
  <div class=\"container main\">
    <div class=\"box-news\">"


    resource.website.products.last(19).reverse.each_with_index do |product, index|
      id = index + 1

      content_index += "<div class=\"box-shadow news-" + id.to_s + "\"><div class=\"image-news\"><img src=\"" + (product.image ? "./images/#{product.id}/#{product.image}" : "#") + "\"><a href=\"" + product.url.to_s + "\"><div class=\"title-news\"><h6>" + product.title + "</h6></div></a></div></div>"
    end


  content_index += "</div>
  </div>

  <script type=\"text/javascript\" src=\"./javascript/index.js\"></script>
</body>
</html>"

    File.write("projects/chaos_news/index.html", content_index)

    system('cd projects/chaos_news && git add . && git commit --amend --no-edit && git push origin master -f')
  end
end
