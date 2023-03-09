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
    render json: top_rated.reverse.first(5)
  end

  def top_reserved
    top_reserved = Restaurant.all.sort_by do |rest|
      rest.reservation_count
    end
    render json: top_reserved.reverse.first(5)
  end

  private

  def res_not_found
    render json: {error: "Restaurant not found"}, status: :not_found
  end
end
