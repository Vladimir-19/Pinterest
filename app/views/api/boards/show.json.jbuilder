#json.set! @board.id do 
    #json.extract! @board, :id, :title, :description
    #josn.id board.id
    #json.titile board.title
    #json.description board.description
    #json.userId board.user_id
    #json.pinIds board.pins.pluck(:id)
    #json.pins @board.pins
#end

#tryed solution from best project

json.partial!('api/boards/board', board: @board, show_all_pins: true)

