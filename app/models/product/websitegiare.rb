require_relative '../../uploaders/product_websitegiare_uploader'
require_relative '../../services/websitegiare/create_service'
require_relative '../../services/websitegiare/update_service'
require_relative '../../services/websitegiare/delete_service'

class Product::Websitegiare < Product
  include EncodeContent

  mount_uploader :image, ProductWebsitegiareUploader
  has_rich_text :content

  before_save :encode_content, if: :content_copied?

  after_create_commit :generate_data
  after_update_commit :update_data
  after_destroy_commit :delete_data

  # validate :image_height_greater_than_or_equal_to_width

  def time_publish
    created_at.in_time_zone('Asia/Ho_Chi_Minh').strftime('%H:%M %d/%m/%Y')
  end

  def formated_time
    created_at.in_time_zone('Asia/Ho_Chi_Minh').strftime('%Y-%m-%dT%H:%M:%S%:z')
  end

  private

  def generate_data
    Websitegiare::CreateService.new(self).perform
  end

  def update_data
    Websitegiare::UpdateService.new(self).perform
  end

  def delete_data
    Websitegiare::DeleteService.new(self).perform
  end

  # def image_height_greater_than_or_equal_to_width
  #   if image? && image.height < image.width
  #     errors.add(:image, "Chiều cao ảnh phải lớn hơn hoặc bằng chiều rộng.")
  #   end
  # end

  def content_copied?
    self.content_copied
  end
end
