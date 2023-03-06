class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :phone, :age, :username, :email, :location, :password, :user_image
end
