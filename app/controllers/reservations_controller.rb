class ReservationsController < ApplicationController
  def index
    render json: Reservation.all(), status: :ok
  end

  def show
    render json: Reservation.find(params[:id]), status: :ok
  end
end
