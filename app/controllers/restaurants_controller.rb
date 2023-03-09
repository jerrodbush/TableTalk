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
    top_rated = Restaurant.all.sort_by(&:avg_rating)
    render json: top_rated.reverse.first(5), status: :ok
  end

  def top_reserved
    top_reserved = Restaurant.all.sort_by(&:reservation_count)
    render json: top_reserved.reverse.first(5), status: :ok
  end

  def popular
    popular = Restaurant.all.sort_by{ |rest| [rest.avg_rating, rest.reservation_count] }
    render json: popular.reverse.first(10)
  end

  private

  def res_not_found
    render json: {error: "Restaurant not found"}, status: :not_found
  end
end
