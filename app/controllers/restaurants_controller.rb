class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all(), status: :ok
  end

  def show
    myRest = Restaurant.find(params[:id])
    render json: myRest, status: :ok
  end
  
end
