class RestaurantsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :res_not_found
  def index
    render json: Restaurant.all(), status: :ok
  end

  def show
    myRest = Restaurant.find(params[:id])
    render json: myRest, status: :ok
  end

  private

  def res_not_found
    render json: {error: "Restaurant not found"}, status: :not_found
  end
end
