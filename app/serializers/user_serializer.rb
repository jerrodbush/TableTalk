class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :phone, :age, :username, :email, :location, :password_digest, :user_image
end
