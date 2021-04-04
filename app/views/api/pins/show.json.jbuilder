#json.partial! "api/pins/pin", pin: @pin
#json.partial!('api/pins/pin', pin: @pin)

#json.set! @pin.id do
  #json.partial! "api/pins/pin", pin: @pin
  #json.boardTitle @pin.boards.pluck(:title)[0]
  #json.user do
    #json.partial! "api/users/user", user: @pin.user
  #end
#end

json.set! @pin.id do
  json.partial! "api/pins/pin", pin: @pin
  json.boardTitle @pin.boards.pluck(:title)[0]
  #json.boardId @pin.boards.pluck(:id)[0]
  json.user do
    json.partial! "api/users/user", user: @pin.user
  end
end