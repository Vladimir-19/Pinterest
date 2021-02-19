

#tryed solution from best project

#json.partial!('api/boards/board', board: @board, show_all_pins: true)

json.boards do
  json.set! @board.id do
    json.partial! "api/boards/board", board: @board
    json.pinIds @board.pins.pluck(:id)
  end
end