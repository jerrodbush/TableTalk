class InterestsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :interest_not_found
  def index
    render json: Interest.all(), status: :ok
  end

  def show
    myInterest = Interest.find(params[:id])
    render json: myInterest, status: :ok
  end
  
  private

  def interest_not_found
    render json: {error: "Interest not found"}, status: :not_found
  end
end
