class Zreview::DeleteService
  attr_accessor :resource

  def initialize resource
    @resource = resource
  end

  def perform
    file_path = "projects/chaos_news/" + resource.url

    if File.exist?(file_path)
      File.delete(file_path)
    end

    chaos_news_path = Rails.root.join('projects', 'zreview')
    system('cd ' + chaos_news_path.to_s + ' && git add . && git commit -m "New commit" && git push origin master -f')
  end
end
