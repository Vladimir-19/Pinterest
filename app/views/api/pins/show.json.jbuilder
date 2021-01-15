json.partial! "api/pins/pin", pin: @pin
json.user do
    json.partial! "api/users/user", user: @pin.user
  end