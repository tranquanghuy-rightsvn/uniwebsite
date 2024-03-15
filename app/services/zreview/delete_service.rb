class Product::DeleteService
  attr_accessor :resource

  def initialize resource
    @resource = resource
  end

  def perform
    file_path = "projects/chaos_news/" + resource.url

    if File.exist?(file_path)
      File.delete(file_path)
    end

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

    chaos_news_path = Rails.root.join('projects', 'chaos_news')
    system('cd ' + chaos_news_path.to_s + ' && git add . && git commit -m "New commit" && git push origin master -f')
  end
end
