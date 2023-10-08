class Category < ApplicationRecord
  belongs_to :website
  has_many :products

  validates :name, presence: true

  def self.generate_options(website_id)
    Category.where(website_id: website_id).pluck(:name, :id)
  end
end
