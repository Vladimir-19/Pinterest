json.set! @board.ids do 
    json.extract! @board, :ids, :title, :description
    json.userId @board.user_id
    json.pinIds @board.pins.pluck(:id)
    json.pins @board.pins
end

#tryed solution from best project