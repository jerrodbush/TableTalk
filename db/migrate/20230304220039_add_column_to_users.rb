class AddColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :user_image, :string
    add_column :restaurants, :rest_image, :string
  end
end
