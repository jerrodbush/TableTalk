class CuisinesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :cuisine_not_found

  def index
    render json: Cuisine.all(), status: :ok
  end

  def show
    myCuisine = Cuisine.find(params[:id])
    render json: myCuisine, status: :ok
  end

  private

  def cuisine_not_found
    render json: {error: "Cuisine not found"}, status: :not_found
  end
end
