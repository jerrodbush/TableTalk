class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :reservation_id
      t.string :comment
      t.string :author

      t.timestamps
    end
  end
end
