class RestaurantsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :res_not_found
  def index
    render json: Restaurant.all(), status: :ok
  end

  def show
    myRest = Restaurant.find(params[:id])
    render json: myRest, status: :ok
  end

  def top_rated
    top_rated = Restaurant.all.sort_by do |rest|
      rest.avg_rating
    end
    render json: top_rated.reverse
  end

  private

  def res_not_found
    render json: {error: "Restaurant not found"}, status: :not_found
  end
end
