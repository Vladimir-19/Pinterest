json.set! @board.id do 
    json.extract! @board, :id, :title, : description
    josn.userId @board.user_id
    json.pinsId @board.pins.pluck(:id)
    json.pins @board.pins
end