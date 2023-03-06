class RatingsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :rating_not_found
  def index
    render json: Rating.all(), status: :ok
  end

  def show
    myRating = Rating.find(params[:id])
    render json: myRating, status: :ok
  end

  private

  def rating_not_found
    render json: {error: "Rating not found"}, status: :not_found
  end
end
