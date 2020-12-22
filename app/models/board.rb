class Board < ApplicationRecord
    
    validates :title, presence: {message: "Don't forget to name your board!"}
    validates :secret, :inclusion => {:in => [true, false]}
    validates :user_id, presence: true

    belongs_to :user 

    has_many :associated_pins,
        class_name: :JoinBoardsPin,
        foreign_key: :board_id,
        dependent: :destroy

    has_many :pins,
        through: :associated_pins,
        source: :pin
        # dependent: :destroy

end