class ChangeRes < ActiveRecord::Migration[7.0]
  def change
    rename_column :interests, :user_id, :reservation_id
  end
end
