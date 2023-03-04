class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.float :rating

      t.timestamps
    end
  end
end
