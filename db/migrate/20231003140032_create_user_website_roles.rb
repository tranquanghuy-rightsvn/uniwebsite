class CreateUserWebsiteRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :user_website_roles do |t|
      t.integer :role, null: false, default: 0
      t.references :user
      t.references :website

      t.timestamps
    end
  end
end
