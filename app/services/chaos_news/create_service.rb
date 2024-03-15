module ChaosNews
  class CreateService
    attr_accessor :resource

    def initialize resource
      @resource = resource
    end

    def perform
      # Lấy bài viết gốc và sửa
      content_temp_path = Rails.root.join('projects', 'chaos_news', 'du-lich-tet-ha-noi-2024.txt')

      content_temp = File.read(content_temp_path)
      resource_img = resource.image.url.split("/")[-3..-1].join("/")
      content_html = "<!DOCTYPE html>
      <html lang='vi' dir='ltr' prefix='og: https://ogp.me/ns#' class=' widescreen entity.node.canonical'>
      <head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-H8GG5LDZG0'></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H8GG5LDZG0');
        </script>
        <meta name='format-detection' content='telephone=no' />
        <meta charset='utf-8' />
        <link rel='canonical' href='./" + resource.url + "' />
        <meta name='robots' content='index, follow' />
        <link rel='image_src' href='" + resource_img + "' />
        <meta name='description' content='" + resource.description + "' />
        <meta property='og:site_name' content='NhuQuynhVinpearl' />
        <meta property='og:url' content='./" + resource.url + "' />
        <meta property='og:title' content='" + resource.title + "' />
        <meta property='og:description' content='" + resource.description + "' />
        <meta property='og:image' content='" + resource_img  + "' />
        <meta property='og:image:url' content='" + resource_img + "' />
        <meta property='og:image:secure_url' content='" + resource_img + "' />

        <script type=\"application/ld+json\">
          {
            \"@context\": \"http://schema.org\",
            \"@type\": \"Article\",
            \"headline\": \"" + resource.title.gsub("\"", "") + "\",
            \"dateCreated\": \"" + resource.formated_time.to_s + "\",
            \"datePublished\": \"" + resource.formated_time.to_s + "\",
            \"dateModified\": \"" + resource.formated_time.to_s + "\",
            \"author\": {
              \"@type\": \"Person\",
              \"name\": \"Như Quỳnh Vinpearl\"
            },
            \"publisher\": {
              \"@type\": \"Organization\",
              \"name\": \"nhuquynhvinpearl.com\"
            },
            \"description\": \"" + resource.description.gsub("\"", "") + "\",
            \"image\": #{resource.content.embeds.map{|e| e.url }},
            \"url\": \"https://nhuquynhvinpearl.com/" + resource.url + "\",
            \"keywords\": #{resource.keywords},
            \"logo\": {
              \"@type\": \"ImageObject\",
              \"url\": \"https://nhuquynhvinpearl.com/" + resource.image.url.split("/")[-3..-1].join("/") + "\"
            },
            \"mainEntityOfPage\": {
              \"@type\": \"WebPage\",
              \"url\": \"https://nhuquynhvinpearl.com/" + resource.url + "\",
              \"@id\": \"https://nhuquynhvinpearl.com/" + resource.url + "\"
            }
          }
        </script>
      <link rel='revision' href='./" + resource.url + "' />
      <title>" + resource.title + "</title>" + content_temp

      doc_root_post = Nokogiri::HTML(content_html.to_s)
      title_root_post = doc_root_post.at_css('#title-news')
      title_root_post.inner_html = resource.title
      content_root_post = doc_root_post.at_css('#content-news')
      content_root_post.inner_html = resource.content.body.to_s.gsub(/<action-text-attachment[^>]*>[^<]*<\/action-text-attachment>/, '')
      date_root_post = doc_root_post.at_css('#date-news')
      date_root_post.inner_html = resource.time_publish.to_s
      description_root_post = doc_root_post.at_css('#description-news')
      description_root_post.inner_html = resource.description

      doc_new_path = Rails.root.join('projects', 'chaos_news', resource.url)
      File.write(doc_new_path, doc_root_post.to_html)

      # Lấy trang news và sửa
      root_news_path = Rails.root.join('projects', 'chaos_news', 'tin-tức-như-quỳnh-vinpearl.html')
      doc_list_news = Nokogiri::HTML(File.read(root_news_path))
      list_news = doc_list_news.at_css('#list-news')

      list_news_html = ""

      Product::ChaosNews.order(id: :desc).limit(30).map do |product|
        product_img= product.image.url.split("/")[-3..-1].join("/")
        list_news_html += "<div class='news-item col-md-6 col-sm-12'>
                                    <div class='row ht_reset_margin'>
                                      <div class='img-block col-md-12 col-sm-6 ht_reset_pd'>
                                        <div class='img-wrapper img-fit'>
                                          <a href='./" + product.url + "'>
                                            <img src='" + product_img + "' alt='" + product.title + "' width='364' height='302' class='ht_mobile_hide'>
                                            <img src='" + product_img + "' alt='" + product.title + "' width='164' height='105' class='ht_mobile_show'>
                                          </a>
                                        </div>
                                      </div>
                                      <div class='info-block col-md-12 col-sm-6 ht_reset_pd'>
                                        <div class='info-wrapper'>
                                          <a href='./" + product.url + "'>
                                            <h3 class='news-item-tit three_dots_2'>" + product.title + "</h3>
                                          </a>
                                          <div class='data_n_view'>
                                            <span class='date'>" + product.time_publish.to_s + "</span>
                                          </div>
                                          <div class='summary three_dots_2' title='" + product.description + "'>" + product.description + "</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>"
      end
      list_news.inner_html = list_news_html
      File.write(root_news_path, doc_list_news.to_html)

      # Sửa sitemap
      sitemap_xml_path = Rails.root.join('projects', 'chaos_news', 'sitemap.xml')
      doc_sitemap_xml = Nokogiri::XML(File.read(sitemap_xml_path))
      div_sitemap_xml = doc_sitemap_xml.at_css('urlset')

      div_sitemap_xml.inner_html = "<url>
                      <loc>https://nhuquynhvinpearl.com/" + resource.url + "</loc>
                      <changefreq>yearly</changefreq>
                      <priority>0.9</priority>
                    </url" + div_sitemap_xml.inner_html

      File.write(sitemap_xml_path, doc_sitemap_xml)



  #     content_index = "<!DOCTYPE html>
  # <html>
  # <head>
  #     <meta charset='utf-8'>
  #     <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  #     <title>Page Title</title>
  #     <meta name='viewport' content='width=device-width, initial-scale=1'>
  #     <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\" crossorigin=\"anonymous\">
  #     <link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.css\">
  # </head>
  # <body>
  #   <div class=\"nav\">
  #     <div class=\"container\">
  #       <h2>HAY TIN</h2>
  #     </div>
  #   </div>
  #   <div class=\"container main\">
  #     <div class=\"box-news\">"


  #     resource.website.products.last(19).reverse.each_with_index do |product, index|
  #       id = index + 1

  #       content_index += "<div class=\"box-shadow news-" + id.to_s + "\"><div class=\"image-news\"><img src=\"" + (product.image ? "./images/#{product.id}/#{product.image}" : "#") + "\"><a href=\"" + product.url.to_s + "\"><div class=\"title-news\"><h6>" + product.title + "</h6></div></a></div></div>"
  #     end


  #   content_index += "</div>
  #   </div>

  #   <script type=\"text/javascript\" src=\"./javascript/index.js\"></script>
  # </body>
  # </html>"

  #     File.write("projects/chaos_news/index.html", content_index)

     # system('cd projects/chaos_news && git add . && git commit --amend --no-edit && git push origin master -f')
      # chaos_news_path = Rails.root.join('projects', 'chaos_news')
      # system('cd ' + chaos_news_path.to_s + ' && git add . && git commit -m "New commit" && git push origin master -f')
    end
  end
end
