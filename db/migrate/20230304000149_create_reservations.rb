class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.string :date
      t.float :time
      t.integer :number_of_seats
      t.string :check_type

      t.timestamps
    end
  end
end
