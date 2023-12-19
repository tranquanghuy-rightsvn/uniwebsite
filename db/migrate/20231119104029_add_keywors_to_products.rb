class AddKeyworsToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :keywords, :string, null: false, default: "[]"
  end
end
