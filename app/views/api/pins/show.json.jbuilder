json.set! @pin.id do
  json.partial! "api/pins/pin", pin: @pin
  json.boardTitle @pin.boards.pluck(:title)[0]
  json.boardId @pin.boards.pluck(:id)[0] #able to go to referral board by Id
  json.user do
    json.partial! "api/users/user", user: @pin.user
  end
end