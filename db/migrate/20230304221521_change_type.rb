class ChangeType < ActiveRecord::Migration[7.0]
  def change
    rename_column :cuisines, :type, :cuz_name

  end
end
