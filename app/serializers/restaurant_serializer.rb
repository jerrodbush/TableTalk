class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :price, :open_time, :close_time, :capacity, :rest_image, :website, :longitude, :latitude, :avg_rating, :reservation_count, :reservation_with_seats_available, :reservations

end
