class JoinBoardsPin < ApplicationRecord
    validates :board_id, :pin_id, presence: true

    belongs_to :pin 
    belongs_to :board 
    
    def self.find_by_credentials(pin_id, board_id)
        boardPin = JoinBoardsPin.where(pin_id: pin_id, board_id: board_id)
        return nill unless boardPin 
        return boardPin
    end
end