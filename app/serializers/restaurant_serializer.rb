class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :price, :open_time, :close_time, :capacity, :rest_image, :website, :longitude, :latitude, :avg_rating

  # def avg_rating
  #   my_rating = 0
  #   object.ratings.map do |rating|
  #     my_rating = my_rating + rating.rating
  #   end
  #   my_rating / object.ratings.length
  # end
end
