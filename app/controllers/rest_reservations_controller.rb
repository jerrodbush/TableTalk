class RestReservationsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :res_not_found

  def reservations
    render json: Restaurant.find(params[:id]), serializer: RestReservationsSerializer, status: :ok
  end

  private

  def res_not_found
    render json: {error: "Restaurant not found"}, status: :not_found
  end
end
