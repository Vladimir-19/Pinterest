class CreateChangesUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :changes_users do |t|
      change_column :users, :username, :string, null: true
    end
  end
end
