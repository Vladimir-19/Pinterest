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
user = User.create(
    id: 13,
    email: "love@art.com",
    username: nil,
    age: 33,
    password_digest: "123123",
    first_name: "Art",
    last_name: "Page",
    description: "Place that fuels creativity.",
    location: "Manhattan"
)
file = open("")
user.photo.attach(io: file, filename: "profile.png")

  id: 12,
 email: "finance@gmail.com",
 username: nil,
 age: 45,
 password_digest: "$2a$12$VflzoRO5v7hReUJnn01Ez.6YMz95umR/OV47wJFZlnq7TkBLFl212",
 session_token: "BrjrvYfFsKalJ32mBqVQ86Y7yCumbfsMGsx8dvQDXVIxy9j69R5Bgv2AbcqeKak3N8VEhEJwABvmo6DWmu2W1A==",
 first_name: "Finance",
 last_name: "Consultant",
 description: "From Wall Street to Main Street",
 location: "Wall Street",

  id: 3,
 email: "vladimir@solovey.com",
 username: nil,
 age: 25,
 password_digest: "$2a$12$EURJlJgHyxRWY7NUYCG.JOHt/VUZ6kr63hjOtmEzQw.ZbmZK.ExL6",
 session_token: "ZMAxlWypjy1FsGULP9UhUh0U2bqO2Ip/TD1hPFEBZ2HNMx9FBym0Vh+Y/1pwfkZjAKqtsF5vtyf8PnabaHvVVQ==",
 first_name: "Demo",
 last_name: "User",
 description: "Place that fuels creativity.",
 location: "New York City",
# boards
#  t.string :title, null: false
#       t.text :description
#       t.integer :user_id, null: false
#       t.boolean :secret, default: false
#       t.timestamps

# :join_boards_pins do |t|
#       t.integer :pin_id, null: false
#       t.integer :board_id, null: false

# :pins do |t|
#       t.string :title, null: false
#       t.text :description
#       t.integer :user_id, null: false
#       t.string :url