class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.integer :reservations_id
      t.integer :user_id
      t.string :guest_check_type

      t.timestamps
    end
  end
end
