namespace :init_zreview do
  desc "Initial Zreview"
  task :create => :environment do
    user = User.find_by email: "admin@gmail.com"

    ActiveRecord::Base.transaction do
      website = Website.create! user_id: user.id, name: "Zreview.vn", brief: "zreview"

      UserWebsiteRole.create! user_id: user.id, website_id: website.id

      ["Công nghệ", "Ẩm thực", "Nhân vật", "Phim", "Sách", "Đồ gia dụng", "Nhà hàng", "Khách sạn", "Du lịch", "Thực phẩm chức năng", "Khác"].map do |cate|
        Category.create! name: cate, website_id: website.id
      end
    end

    puts "Initialized successfully"
  end
end

