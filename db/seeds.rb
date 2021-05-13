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

# # users
#     t.string :email, null: false
#     t.string :username, null: false
#     t.integer :age, null: false
#     t.string :password_digest, null: false
#     t.string :session_token, null: false
#     t.string :first_name 
#     t.string :last_name 
#     t.text :description
#     t.string :location

user1 = User.create!(
    email: 'vladimir@solovey.com',
    age: '25',
    password: 'welcome1',
    first_name: 'Demo',
    last_name: 'User',
    description: '',
    location: 'New York City'
)

file = open("")
user1.photo.attach(io: file, filename: "avaUser1.jpg")

# BOARDS
board1 = Board.create!(
    title: "Play with Me!",
    description: "User can Edit only their own Boards & Pins",
    user_id: user1.id
)

#PINS 
pin1 = Pin.create!(
    title: "Modern outdoor light",
    description: "",
    user_id: user1.id,
    url: "https://www.signaturehardware.com/paddock-2-light-outdoor-entrance-wall-sconce-black.html?pids=233587&g_acctid=7220359250&g_campaignid=2015933757&g_adgroupid=68299630781&g_adid=354008659102&g_keyword=&g_keywordid=pla-607166707362&g_adtype=pla&g_merchantid=387294&g_productchannel=online&g_productid=440681&g_partition=607166707362&g_network=g&g_ifproduct=product&g_ifcreative=&gclsrc=aw.ds&&gclid=CjwKCAjw1uiEBhBzEiwAO9B_Hc8S_UZ0qqt2Hd2ykpmygbZZhxWUUuN3dUCj-CA8vIbzqZqxFXn69BoCO_YQAvD_BwE"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/outdoorLight.jpg")
pin1.photo.attach(io: file, filename: "outdoorLight.jpg")

pin2 = Pin.create!(
    title: "Voyager 1, now in interstellar space",
    description: "NASA’s Voyager 1 spacecraft is currently over 14.1 billion miles from Earth...",
    user_id: user1.id,
    url: "https://www.yahoo.com/entertainment/voyager-1-now-interstellar-space-035654102.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAEpC8xVgbWRPhGpnaDM3WpBSK16zDp9z3zNL_XvRX6mHJVQmZcl9uvoWlZ9BHYDXTpNMYYg4Gawej0cLBRWnSGjeYPpfOaUJ9X6NqX8KHMrNkCSEOeD_dHYu5abaOB0YZ-rmEMEV1HBqlYcOWC275puc3Z6UFA4vcKksXPdVw6VG"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/interstellar.jpg")
pin2.photo.attach(io: file, filename: "interstellar.jpg")

pin3 = Pin.create!(
    title: "The World's Biggest Art Heist",
    description: "NETFLIX Series",
    user_id: user1.id,
    url: "https://www.netflix.com/title/81032570"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/heist.jpg")
pin3.photo.attach(io: file, filename: "heist.jpg")

# Board with Pins 
boardPin1 = JoinBoardsPin.create!(pin_id: pin1.id, board_id: board1.id)
boardPin2 = JoinBoardsPin.create!(pin_id: pin2.id, board_id: board1.id)
boardPin3 = JoinBoardsPin.create!(pin_id: pin3.id, board_id: board1.id)

# user2 = User.create(
#     email: "finance@gmail.com",
#     username: nil,
#     age: 45,
#     first_name: "Finance",
#     last_name: "Consultant",
#     description: "From Wall Street to Main Street",
#     location: "Wall Street",
# )

# file = open("")
# user.photo.attach(io: file, filename: "profile.png")

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