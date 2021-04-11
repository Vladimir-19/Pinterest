#json.ser! @user.id do 
    json.partial! "api/users/user", user: @user
 #   json.userId @user.pluck(:id) 
#end
