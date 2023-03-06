class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :phone, :age, :username, :email, :location, :password, :user_image

  def full_name
    return object.first_name + " " + object.last_name
  end
end
