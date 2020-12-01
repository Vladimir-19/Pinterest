@pin.each do |pin|
    json.set! pin.id do
     json.partial! "api/pins/show", pin: pin
    end
end