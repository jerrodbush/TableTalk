class RestaurantsController < ApplicationController
    def index
        restaurants = Restaurant.all
        hash = Gmaps4rails.build_markers(@restaurants) do |restaurant, marker|
          marker.lat restaurant.latitude
          marker.lng restaurant.longitude
          marker.infowindow restaurant.name
        end
        render json: hash.to_json
      end
    end  
end
