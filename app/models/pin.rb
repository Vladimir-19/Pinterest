class Pin < ApplicationRecord

    validates :title, presence: { message: "is not valid."}
    
    belongs_to :user

    # has_many :associated_boards,
    has_many :boards_pins,
        class_name: :JoinBoardsPin,
        foreign_key: :pin_id,
        dependent: :destroy

    has_many :boards,
        # through: :associated_boards,
        through: :boards_pins,
        source: :board

    has_one_attached :photo

end