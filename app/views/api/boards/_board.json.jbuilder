#json.extract! board, :id, :title, :description, :secret, :user_id

json.id board.id
json.title board.title
json.description board.description
json.secret board.secret
json.user_id board.user_id
