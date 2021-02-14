json.set! @board.id do 
    json.extract! @board, :id, :title, :description
    josn.boardId @board.id
    json.titile @board.title
    json.description @board.description
    json.userId @board.user_id
    json.pinIds @board.pins.pluck(:id)
    json.pins @board.pins
end

#tryed solution from best project
