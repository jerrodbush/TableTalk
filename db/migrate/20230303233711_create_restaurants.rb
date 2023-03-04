class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :phone
      t.string :address
      t.string :price
      t.integer :open_time
      t.integer :close_time
      t.integer :capacity

      t.timestamps
    end
  end
end
