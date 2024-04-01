class Zreview::UpdateService
  attr_accessor :resource

  def initialize resource
    @resource = resource
  end

  def perform
    category_direct_path = case resource.category.name
      when "Công nghệ"
        "cong-nghe.html"
      when "Sách"
        "sach.html"
      when "Phim"
        "phim.html"
      when "Khách sạn"
        "khach-san.html"
      when "Ẩm thực"
        "am-thuc.html"
      when "Nhân vật"
        "nhan-vat.html"
      when "Đồ gia dụng"
        "do-gia-dung.html"
      when "Nhà hàng"
        "nha-hang.html"
      when "Du lịch"
        "du-lich.html"
      when "Thực phẩm chức năng"
        "thuc-pham-chuc-nang.html"
      when "Khác"
        "khac.html"
      end

    # lấy bài viết gốc và sửa
    content_temp_path = Rails.root.join('projects', 'zreview', 'bai-viet-mau.txt')

    content_temp = File.read(content_temp_path)
    resource_img = resource.image.url.split("/")[-3..-1].join("/")
    content_html = "<!DOCTYPE html>
    <html lang='vi' xmlns='http://www.w3.org/1999/xhtml'>
    <head>
      <script async src='https://www.googletagmanager.com/gtag/js?id=G-00HNHTJ14N'></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-00HNHTJ14N');
      </script>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
      <meta http-equiv='REFRESH' content='1800' />
      <meta http-equiv='Content-Language' content='vi'>
      <meta name='copyright' content='Copyright © 2024 by Zreview.vn'>
      <meta name='distribution' content='Global'>
      <meta name='author' content='Zreview.vn'>

      <title>" + resource.title_format + "</title>
      <meta name='description' content='" + resource.description.gsub('"', "") + "' />
      <meta name='abstract' content='" + resource.description.gsub('"', "") + "' />
      <meta name='keywords' content='" + JSON.parse(resource.keywords).join(",") + "' />

      <!-- ROBOTS -->
      <meta name='robots' content='index,follow' />

      <!-- FACEBOOK OPEN GRAPH -->
      <meta property='fb:app_id' content='571421367282732' />
      <meta property='og:site_name' content='Zreview.vn' />
      <meta property='og:rich_attachment' content='true' />
      <meta property='og:type' content='article' />

      <meta property='article:published_time' content='" + resource.formated_time + "' />

      <meta property='og:url' content='https://zreview.vn/" + resource.url + "' />
      <meta property='og:title' content='" + resource.title.gsub('"', "") + "' />
      <meta property='og:description' content='" + resource.description.gsub('"', "") + "' />" +
      JSON.parse(resource.keywords).map do |key|
        "<meta property='article:tag' content='" + key + "'/>
        "
      end.join("") +
      "<link rel='canonical' href='https://zreview.vn/" + resource.url + "'/>

      <meta content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1' name='viewport'/>
      <meta name='format-detection' content='telephone=no' />
      <meta name='format-detection' content='address=no' />
      <meta name='apple-mobile-web-app-capable' content='yes'>
      <meta name='apple-mobile-web-app-status-bar-style' content='black'>
      <meta name='referrer' content='no-referrer-when-downgrade' />

      <script type='application/ld+json'>
        {
          \"@context\": \"http://schema.org\",
          \"@type\": \"NewsArticle\",
          \"mainEntityOfPage\": {
          \"@type\": \"WebPage\",
          \"@id\": \"https://zreview.vn/" + resource.url + "\"
        },
        \"headline\": \"" + resource.title.gsub('"', "") + "\",
        \"description\": \"" + resource.description.gsub('"', "") + "\",
        \"image\": {
        \"@type\": \"ImageObject\",
        \"url\": \"https://zreview.vn/" + resource_img + "\",
        \"width\": 500,
        \"height\": 333
      },
      \"datePublished\": \"" + resource.formated_time + "\",
      \"author\": {
      \"@type\": \"Organization\",
      \"name\": \"Zreview\"
    },
    \"publisher\": {
    \"@type\": \"Organization\",
    \"name\": \"Zreview\"
    }
    }
    var cate_path = " + category_direct_path[0...-5] + ";
    var cate_name = " + resource.category.name + ";
    </script>" + content_temp

    doc_root_post = Nokogiri::HTML(content_html.to_s)
    title_root_post = doc_root_post.at_css('#title-review')
    title_root_post.inner_html = resource.title_format
    content_root_post = doc_root_post.at_css('#content-review')
    content_root_post.inner_html = resource.content.body.to_s.gsub(/<action-text-attachment[^>]*>[^<]*<\/action-text-attachment>/, '')
    date_root_post = doc_root_post.at_css('#time-review')
    date_root_post.inner_html = resource.time_publish.to_s

    category_root_post = doc_root_post.at_css('#zreview-parent-category')
    category_root_post.inner_html = "<a href='./" + category_direct_path + "' title='" + resource.category.name + "' class='parent_cate' id='zreview-parent-cate'>" + resource.category.name + "</a>"

    news_reference = doc_root_post.at_css('#news-reference')
    list_news_html = ""
    Product::Zreview.same_category(resource).where.not(id: resource.id).order(id: :desc).limit(6).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article zone-ad-name='' class='article-item znews-native type-text picked-featured'>
         <p class='article-thumbnail'>
            <a href='" + product.url + "'>
              <img src='" + product_img + "'  alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>

            <ul class='article-related'>
              <li class=' type-text'><a href='" + product.url + "' title='" + product.title_format + "'>" + product.title_format + "</a></li>
            </ul>
          </header>
        </article>"
    end

    news_reference.inner_html = list_news_html

    doc_new_path = Rails.root.join('projects', 'zreview', resource.url)
    File.write(doc_new_path, doc_root_post.to_html)


    # Lấy trang index và sửa

    root_news_path = Rails.root.join('projects', 'zreview', 'index.html')
    doc_list_news = Nokogiri::HTML(File.read(root_news_path))
    list_news_1 = doc_list_news.at_css('#list-first')

    list_news_html = ""

    Product::Zreview.hot_category.order(id: :desc).limit(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article zone-ad-name='' class='article-item znews-native type-text picked-featured'>
         <p class='article-thumbnail'>
            <a href='" + product.url + "'>
              <img src='" + product_img + "'  alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>

            <ul class='article-related'>
              <li class=' type-text'><a href='" + product.url + "' title='" + product.title_format + "'>" + product.title_format + "</a></li>
            </ul>
          </header>
        </article>"
    end
    list_news_1.inner_html = list_news_html

    list_news_2 = doc_list_news.at_css('#list-second')

    list_news_html = ""

    Product::Zreview.hot_category.order(id: :desc).limit(5).offset(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item type-text picked-trending short'>
          <p class='article-thumbnail'>
            <a href='" + product.url + "'>

              <img src='" + product_img + "'  alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>

          </header>
        </article>"
    end
    list_news_2.inner_html = list_news_html

    list_news_3 = doc_list_news.at_css('#list-human')
    list_news_html = ""

    Product::Zreview.by_humen.order(id: :desc).limit(5).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item znews-native type-picture picked-multi short'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end

    list_news_3.inner_html = list_news_html

    list_news_4 = doc_list_news.at_css('#list-book')
    list_news_html = ""

    Product::Zreview.by_books.order(id: :desc).limit(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item znews-native type-text'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end

    list_news_4.inner_html = list_news_html

    list_news_5 = doc_list_news.at_css('#list-film')
    list_news_html = ""

    list_news_10 = doc_list_news.at_css('#top-list-book')
    list_news_html = ""

    Product::Zreview.by_books.order(id: :desc).limit(5).offset(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item znews-native type-text'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end

    list_news_10.inner_html = list_news_html

    list_news_11 = doc_list_news.at_css('#top-list-film')
    list_news_html = ""

    Product::Zreview.by_films.order(id: :desc).limit(5).offset(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item znews-native type-text'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end

    list_news_11.inner_html = list_news_html

    list_news_5 = doc_list_news.at_css('#list-film')
    list_news_html = ""

    Product::Zreview.by_films.order(id: :desc).limit(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item znews-native type-text'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end

    list_news_5.inner_html = list_news_html

    list_news_6 = doc_list_news.at_css('#list-recommend')
    list_news_html = ""
    hot_product_ids = Product::Zreview.hot_category.order(id: :desc).limit(8).ids
    Product::Zreview.not_ids(hot_product_ids).order(id: :desc).limit(12).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item  type-text'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end

    list_news_6.inner_html = list_news_html

    File.write(root_news_path, doc_list_news.to_html)

    # Sửa category
    category_path = Rails.root.join('projects', 'zreview', category_direct_path)
    category_doc = Nokogiri::HTML(File.read(category_path))
    products_same_category = Product::Zreview.same_category(resource)

    list_category_1 = category_doc.at_css('#category-list-1')

    list_news_html = ""

    products_same_category.order(id: :desc).limit(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article zone-ad-name='' class='article-item znews-native type-text picked-featured'>
        <p class='article-thumbnail'>
          <a href='" + product.url + "'>
            <img src='" + product_img + "'  alt='" + product.title_format + "' />
          </a>
        </p>
        <header>
          <p class='article-title'>
            <a href='" + product.url + "'>" + product.title_format + "</a>
          </p>
          <p class='article-summary'>" + product.description + "</p>

          <ul class='article-related'>
            <li class=' type-text'><a href='" + product.url + "' title='" + product.title_format + "'>" + product.title_format + "</a></li>
          </ul>
        </header>
      </article>"
    end
    list_category_1.inner_html = list_news_html

    list_category_2 = category_doc.at_css('#category-list-2')

    list_news_html = ""

    products_same_category.order(id: :desc).limit(5).offset(3).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item type-text picked-trending short'>
          <p class='article-thumbnail'>
            <a href='" + product.url + "'>

              <img src='" + product_img + "'  alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>

          </header>
        </article>"
    end
    list_category_2.inner_html = list_news_html

    list_category_3 = category_doc.at_css('#category-list-3')

    list_news_html = ""

    products_same_category.order(id: :desc).limit(40).offset(8).map do |product|
      product_img= product.image.url.split("/")[-3..-1].join("/")
      list_news_html += "<article class='article-item  type-text'>
          <p class='article-thumbnail'>
            <a href='./" + product.url + "'>

              <img src='" + product_img + "' alt='" + product.title_format + "' alt='" + product.title_format + "' />
            </a>
          </p>
          <header>
            <p class='article-title'>
              <a href='./" + product.url + "'>" + product.title_format + "</a>
            </p>
            <p class='article-summary'>" + product.description + "</p>
          </header>
        </article>"
    end
    list_category_3.inner_html = list_news_html
    File.write(category_path, category_doc.to_html)

    # sửa atom.xml
    atom_xml_path =  Rails.root.join('projects', 'zreview', 'atom.xml')
    doc_atom_xml = Nokogiri::XML(File.read(atom_xml_path))
    div_atom_xml = doc_atom_xml.at_css('feed')
    atom_xml = "<title>Zreview - Review cả thế giới</title>
              <id>https://zreview.vn/</id>
                <updated>" + Product::Zreview.last.created_at.in_time_zone("Asia/Ho_Chi_Minh").iso8601 + "</updated>
              <link href=\"https://zreview.vn/\"/>
              <link rel=\"self\" href=\"https://zreview.vn/atom.xml\"/>
              <author>
              <name>Zreview</name>
              </author>
              <icon>https://zreview.vn/images/favicon/favicon_48x48.ico</icon>
              <logo>https://zreview.vn/images/logo.svg</logo>"

    Product::Zreview.order(id: :desc).limit(20).map do |product|
      product_img= "https://zreview.vn/" + product.image.url.split("/")[-3..-1].join("/")
      atom_xml += "<entry>
        <id>https://zreview.vn/" + product.url + "</id>" +
        "<title>" + product.title + "</title>
        <updated>" + product.created_at.in_time_zone("Asia/Ho_Chi_Minh").iso8601 + "</updated>
        <link rel=\"alternate\" type=\"text/html\" href=\"https://zreview.vn/" + product.url + "\"/>
        <link rel=\"enclosure\" type=\"image/jpg\" href=\"" + product_img + "\"/>
        <summary type=\"html\"><p>" + product.description + "</p></summary>
        <media:thumbnail url=\"" + product_img + "\" width=\"500\" height=\"333\"/>
      </entry>"
    end

    div_atom_xml.inner_html = atom_xml
    File.write(atom_xml_path, doc_atom_xml)

    zreview_path = Rails.root.join('projects', 'zreview')
    system('cd ' + zreview_path.to_s + ' && git add . && git commit -m "New commit" && git push origin master -f')
  end
end
