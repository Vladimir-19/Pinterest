class Pin < ApplicationRecord

    validates :title, presence: { message: "Please enter a valid title"}
    
    has_one_attached :photo
    belongs_to :user

    has_many :associated_boards,
        class_name: :JoinBoardPin,
        foreign_key: :pin_id,
        dependent: :destroy

    has_many :boards,
        through: :associated_boards,
        source: :board
end