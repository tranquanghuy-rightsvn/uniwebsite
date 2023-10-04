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
  end
end
