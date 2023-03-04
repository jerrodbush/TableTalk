class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone, :age, :username, :email, :location, :password
end
