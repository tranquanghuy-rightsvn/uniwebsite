class AddContentCopiedToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :content_copied, :boolean, default: false
  end
end
