require_relative '../../uploaders/product_chaos_news_uploader'
require_relative '../../services/chaos_news/create_service'
require_relative '../../services/chaos_news/update_service'
require_relative '../../services/chaos_news/delete_service'

class Product::ChaosNews  < Product
  mount_uploader :image, ProductChaosNewsUploader
  has_rich_text :content

  after_create_commit :generate_data
  after_update_commit :update_data
  after_destroy_commit :delete_data

  # validate :image_height_greater_than_or_equal_to_width

  private

  def generate_data
    ChaosNews::CreateService.new(self).perform
  end

  def update_data
    ChaosNews::UpdateService.new(self).perform
  end

  def delete_data
    ChaosNews::DeleteService.new(self).perform
  end

  def image_height_greater_than_or_equal_to_width
    if image? && image.height < image.width
      errors.add(:image, "Chiều cao ảnh phải lớn hơn hoặc bằng chiều rộng.")
    end
  end
end
