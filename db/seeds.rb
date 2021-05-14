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

# USERS
user1 = User.create!(
    email: 'vladimir@solovey.com',
    age: '25',
    password: 'welcome1',
    first_name: 'Demo',
    last_name: 'User',
    description: '',
    location: 'New York City'
)
file = open("https://pinterest-seeds.s3.amazonaws.com/user1.jpg")
user1.photo.attach(io: file, filename: "user1.jpg")


user2 = User.create!(
    email: "love@art.com",
    age: 33,
    password: "123123",
    first_name: "Art",
    last_name: "Page",
    description: "Place that fuels creativity.",
    location: "Manhattan"
)
file = open("https://pinterest-seeds.s3.amazonaws.com/user2.jpg")
user2.photo.attach(io: file, filename: "user2.jpg")

user3 = User.create(
    email: "finance@gmail.com",
    age: 37,
    password: "123123",
    first_name: "Jeffrey C.",
    last_name: "Sprecher",
    description: "From Wall Street to Main Street",
    location: "Wall Street",
)

file = open("https://pinterest-seeds.s3.amazonaws.com/user3.jpg")
user3.photo.attach(io: file, filename: "user3.jpg")

# BOARDS
board1 = Board.create!(
    title: "Play with Me!",
    description: "User can Edit only their own Boards & Pins",
    user_id: user1.id
)

board2 = Board.create( 
    title: "Female Artist",
    description: "Female Artists Who Changed the Art World.",
    user_id: user2.id,
)

board3 = Board.create(
    title: "Obstruction Art",
    description: "Modern Art (1900 - 1970).",
    user_id: user2.id,
)

board4 = Board.create(
    title: "Intresting Pins",
    description: "Fun Stuff",
    user_id: user3.id
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

pin4 = Pin.create(
    title: "A Onda",
    description: "1917 by Anita Malfatti",
    user_id: user2.id,
    url: "https://www.wikiart.org/en/anita-malfatti/a-onda-1917"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/a-onda-1917.jpg")
pin4.photo.attach(io: file, filename: "a-onda-1917.jpg")


pin5 = Pin.create(
    title: "Dancing",
    description: "Beatriz Milhazes, Dancing, 2007",
    user_id: user2.id,
    url: "https://www.e-flux.com/announcements/32292/beatriz-milhazes/"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/dancing.jpg")
pin5.photo.attach(io: file, filename: "dancing.jpg")


pin6 = Pin.create(
    title: "I and the Village",
    description: "Marc Chagall",
    user_id: user2.id,
    url: "https://www.moma.org/collection/works/78984"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/i-and-village.jpg")
pin6.photo.attach(io: file, filename: "i-and-village.jpg")

pin7 = Pin.create(
    title: "Yellow over Purple",
    description: "1956, by Mark Rathko",
    user_id: user2.id,
    url: "http://www.artnet.com/artists/mark-rothko/yellow-over-purple-K0nNBnxuMBtptibXJnPO5g2"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/rothko.jpg")
pin7.photo.attach(io: file, filename: "rothko.jpg")

pin8 = Pin.create(
    title: "Renting Vs Buying in NYC",
    description: "NYC after Pandemic",
    user_id: user3.id, 
    url: "https://www.bloomberg.com/opinion/articles/2021-04-01/should-you-rent-or-buy-in-new-york-city-right-now"  
)

file = open("https://pinterest-seeds.s3.amazonaws.com/nyc.jpg")
pin8.photo.attach(io: file, filename: "nyc.jpg")


pin9 = Pin.create(
    title: "The Platinum Card",
    description: "Review",
    user_id: user3.id,
    url: "https://time.com/nextadvisor/credit-cards/american-express/american-express-platinum-review/"   
)

file = open("https://pinterest-seeds.s3.amazonaws.com/amex.jpg")
pin9.photo.attach(io: file, filename: "amex.jpg")

pin10 = Pin.create(
    title: "FOUR SEASONS, BORA BORA",
    description: "Travel",
    user_id: user3.id,
    url: "https://www.americanexpress.com/en-us/travel/fine-hotels-resorts/property/Four-Seasons-Resort-And-Residences-Vail?linknav=US-travel-dd-fhr-PropertyResults--FourSeasonsResortAndResidencesVail"   
)

file = open("https://pinterest-seeds.s3.amazonaws.com/borabora.jpg")
pin10.photo.attach(io: file, filename: "borabora.jpg")

pin11 = Pin.create(
    title: "Istoria Bespoke Onyx in 120mm",
    description: "The client chose for our Istoria Bespoke Onyx to be laid throughout the downstairs area of their home in Herringbone Select Grade 15/4mm x 120mm x 600mm...",
    user_id: user3.id,
    url: "https://www.jordanandrews.com/portfolio/istoria-bespoke-onyx-in-120mm-herringbone-and-80mm-character-grade/"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/floor.jpg")
pin11.photo.attach(io: file, filename: "floor.jpg")

pin12 = Pin.create(
    title: "Where to Spot the World’s Most Beautiful Sunsets",
    description: "Where to Spot the World's Most Beautiful Sunsets",
    user_id: user3.id,
    url: "https://www.travelocity.com/inspire/where-to-spot-the-worlds-most-beautiful-sunsets/?brandcid=travelocity-us.social.pinterest.published-inspire.generic&utm_source=pinterest&utm_medium=social-published&utm_campaign=inspire"
)

file = open("https://pinterest-seeds.s3.amazonaws.com/sunset.jpg")
pin12.photo.attach(io: file, filename: "sunset.jpg")

# Board with Pins 
boardPin1 = JoinBoardsPin.create!(pin_id: pin1.id, board_id: board1.id)
boardPin2 = JoinBoardsPin.create!(pin_id: pin2.id, board_id: board1.id)
boardPin3 = JoinBoardsPin.create!(pin_id: pin3.id, board_id: board1.id)
boardPin4 = JoinBoardsPin.create!(pin_id: pin4.id, board_id: board2.id)
boardPin5 = JoinBoardsPin.create!(pin_id: pin5.id, board_id: board2.id)
boardPin6 = JoinBoardsPin.create!(pin_id: pin6.id, board_id: board3.id)
boardPin7 = JoinBoardsPin.create!(pin_id: pin7.id, board_id: board3.id)
boardPin8 = JoinBoardsPin.create!(pin_id: pin8.id, board_id: board4.id)
boardPin9 = JoinBoardsPin.create!(pin_id: pin9.id, board_id: board4.id)
boardPin10 = JoinBoardsPin.create!(pin_id: pin10.id, board_id: board4.id)
boardPin10 = JoinBoardsPin.create!(pin_id: pin11.id, board_id: board4.id)
boardPin11 = JoinBoardsPin.create!(pin_id: pin12.id, board_id: board4.id)