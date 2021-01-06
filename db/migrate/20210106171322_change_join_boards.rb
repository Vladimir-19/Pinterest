class ChangeJoinBoards < ActiveRecord::Migration[5.2]
  def change
    add_index :join_boards_pins, [:board_id, :pin_id], unique: true 
  end
end
