class CreateInterests < ActiveRecord::Migration[7.0]
  def change
    create_table :interests do |t|
      t.integer :user_id
      t.string :interest
      t.integer :priority

      t.timestamps
    end
  end
end
