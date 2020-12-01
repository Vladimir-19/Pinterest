class CreateJoinBoardsPins < ActiveRecord::Migration[5.2]
  def change
    create_table :join_boards_pins do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.timestamps
    end
    add_index :join_boards_pins, :board_id
    add_index :join_boards_pins, :pin_id
  end
end
