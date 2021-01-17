#json.extract! pin, :id, :title, :description, :url, :user_id
##json.photo url_for(pin.photo)
#json.photoUrl url_for(pin.photo)

json.extract! pin, :id, :title, :description, :url, :user_id
json.photo url_for(pin.photo)