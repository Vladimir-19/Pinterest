# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Board.destroy_all
Pin.destroy_all
JoinBoardsPin.destroy_all

# users
# t.string :email, null: false
#       t.string :username, null: false
#       t.integer :age, null: false
#       t.string :password_digest, null: false
#       t.string :session_token, null: false
#       t.string :first_name 
#       t.string :last_name 
#       t.text :description
#       t.string :location

# user1 = User.create(
#     email: "vladimir@solovey.com",
#     username: nil,
#     age: 25,
#     first_name: "Demo",
#     last_name: "User",
#     description: "Place that fuels creativity.",
#     location: "New York City",
# )

# file = open("")
# user.photo.attach(io: file, filename: "profile.png")


user2 = User.create(
    email: "finance@gmail.com",
    username: nil,
    age: 45,
    first_name: "Finance",
    last_name: "Consultant",
    description: "From Wall Street to Main Street",
    location: "Wall Street",
)

file = open("")
user.photo.attach(io: file, filename: "profile.png")

#  user3 = User.create(
#     email: "love@art.com",
#     username: nil,
#     age: 33,
#     password_digest: "123123",
#     first_name: "Art",
#     last_name: "Page",
#     description: "Place that fuels creativity.",
#     location: "Manhattan"
# )

# file = open("")
# user.photo.attach(io: file, filename: "profile.png")


# BOARDS
#  t.string :title, null: false
#       t.text :description
#       t.integer :user_id, null: false
#       t.boolean :secret, default: false
#       t.timestamps

# Board.create( 
#     title: "Female Artist",
#     description: "Female Artists Who Changed the Art World.",
#     user_id: 13,
#     secret: false,
# )


#     title: "Obstruction Art",
#     description: "Modern Art (1900 - 1970).",
#     user_id: 13,
#     secret: false,
 
#     title: "test",
#     description: "xxx",
#     user_id: 3,
#     secret: false,

# :join_boards_pins do |t|
#       t.integer :pin_id, null: false
#       t.integer :board_id, null: false

# :pins do |t|
#       t.string :title, null: false
#       t.text :description
#       t.integer :user_id, null: false
#       t.string :url