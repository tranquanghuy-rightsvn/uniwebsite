class Product < ApplicationRecord
  belongs_to :website
  belongs_to :category, optional: true
  validates :url, presence: true, uniqueness: { scope: :website_id }
end
