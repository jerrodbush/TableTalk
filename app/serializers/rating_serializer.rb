class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :rating
end
