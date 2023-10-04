# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create! email: "admin@gmail.com", password: "Ketcdlena1@@", role: 0
user_2 = User.create! email: "quanghuy@gmail.com", password: "123123", role: 4
website = Website.create! name: "Chaos news", brief: "chaos_news", user_id: user_2.id
UserWebsiteRole.create! user_id: user_2.id, website_id: website.id, role: 1

categories = ["Thể thao", "Giải trí", "Pháp luật", "Giới trẻ", "Thế giới", "Duc lịch"]
categories.each do |cate|
  Category.create! website_id: website.id, name: cate
end
