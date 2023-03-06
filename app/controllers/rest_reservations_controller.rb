class RestReservationsController < ApplicationController

  def reservations
    render json: Restaurant.find(params[:id]), serializer: RestReservationsSerializer, status: :ok
  end

end
