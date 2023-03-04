class CreateCuisines < ActiveRecord::Migration[7.0]
  def change
    create_table :cuisines do |t|
      t.integer :restaurant_id
      t.string :type

      t.timestamps
    end
  end
end
