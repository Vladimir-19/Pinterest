@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :title, :description
        #josn.id board.id
        #json.title board.title
        #josn.description board.description
        json.userId board.user_id
        json.pinIds board.pin_ids
        json.pins board.pins
        #json.partial! "api/board/board", baord: board
    end
end