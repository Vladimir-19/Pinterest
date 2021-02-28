 #json.extract! user, :id, :email, :age
  json.id  user.id
  json.email user.email
  json.location user.location
  json.description user.description
   json.firstName user.first_name
   json.lastName user.last_name
  #json.photoUrl url_for(user.photo) #if user.photo.attached?
  json.photo url_for(user.photo) if user.photo.attached?

