class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :price, :open_time, :close_time, :capacity
end
