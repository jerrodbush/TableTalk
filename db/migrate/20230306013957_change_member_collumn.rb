class ChangeMemberCollumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :members, :reservations_id, :reservation_id
  end
end
