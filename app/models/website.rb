class Website < ApplicationRecord
  belongs_to :owner, class_name: 'User', foreign_key: 'user_id'
  has_many :products

  before_create :change_role_user
  after_create :generate_folder

  private

  def change_role_user
    owner.owner_website! if User.roles[owner.role] > 2
  end

  def generate_folder
    folder_path = Rails.root.join('projects', brief)
    images_path = Rails.root.join('projects', brief, 'images')
    js_path = Rails.root.join('projects', brief, 'javascripts')
    css_path = Rails.root.join('projects', brief, 'css')

    FileUtils.mkdir_p(folder_path)
    FileUtils.mkdir_p(images_path)
    FileUtils.mkdir_p(js_path)
    FileUtils.mkdir_p(css_path)


    content = "<html><head><title>Generated HTML</title></head><body><h1>Hello, World!</h1></body></html>"
    File.write("projects/" + brief + "/index.html", content)
    File.write(js_path  + "index.js", '')
    File.write(css_path + "style.css", '')

    system("cd projects/" + brief + " && git init")
  end
end
