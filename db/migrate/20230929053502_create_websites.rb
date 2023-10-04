class CreateWebsites < ActiveRecord::Migration[6.1]
  def change
    create_table :websites do |t|
      t.string :name
      t.string :brief
      t.string :github
      t.string :repo
      t.string :account_github
      t.string :password_github
      t.string :domain_vercel
      t.string :domain_website

      t.timestamps
    end
  end
end
