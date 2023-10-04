class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :description
      t.string :price
      t.string :url
      t.string :image

      t.references :category
      t.references :user
      t.references :website, null: false

      t.timestamps
    end
  end
end
