class UserWebsiteRole < ApplicationRecord
  enum role: {manage_website: 0, owner_website: 1}

  belongs_to :user
  belongs_to :website
end
