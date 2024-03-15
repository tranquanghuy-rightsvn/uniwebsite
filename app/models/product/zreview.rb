# require_relative '../../uploaders/product_chaos_news_uploader'

class Product::Zreview  < Product
  mount_uploader :image, ProductZreviewUploader
  has_rich_text :content

  after_create_commit :generate_data
  after_update_commit :update_data
  after_destroy_commit :delete_data

  # validate :image_height_greater_than_or_equal_to_width
  validates :category_id, presence: true

  scope :by_humen, -> {joins(:category).where(category: {name: "Nhân vật"})}
  scope :by_books, -> {joins(:category).where(category: {name: "Sách"})}
  scope :by_films, -> {joins(:category).where(category: {name: "Phim"})}
  scope :same_category, -> (product){where(category_id: product.category.id)}

  def time_publish
    created_at.in_time_zone('Asia/Ho_Chi_Minh').strftime('%H:%M %d/%m/%Y')
  end

  def formated_time
    created_at.in_time_zone('Asia/Ho_Chi_Minh').strftime('%Y-%m-%dT%H:%M:%S%:z')
  end

  private

  def generate_data
    ::Zreview::CreateService.new(self).perform
  end

  def update_data
    ::Zreview::UpdateService.new(self).perform
  end

  def delete_data
    ::Zreview::DeleteService.new(self).perform
  end
end
