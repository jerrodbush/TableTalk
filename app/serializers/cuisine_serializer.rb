class CuisineSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :type
end
