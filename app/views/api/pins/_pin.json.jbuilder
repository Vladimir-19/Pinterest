json.id pin.id
json.title pin.title
json.description pin.description
json.url pin.url
json.userId pin.user_id
#json.photoUrl url_for(pin.photo) if pin.photo.attached? 
json.photo url_for(pin.photo) if pin.photo.attached?
