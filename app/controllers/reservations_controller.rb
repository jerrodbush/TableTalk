class ReservationsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :res_not_found
rescue_from ActiveRecord::RecordInvalid, with: :res_invalid

  def index
    render json: Reservation.all(), status: :ok
  end

  def show
    render json: Reservation.find(params[:id]), status: :ok
  end

  def create
    newRes = Reservation.create!(strong_params)
    render json: newRes, status: :created
  end

  def update
    myRes = Reservation.find(params[:id])
    myRes.update!(strong_params)
    render json: myRes, status: :accepted
  end

  def destroy
    Reservation.find(params[:id]).destroy
    head :no_content
  end

  private

  def strong_params
    params.permit(:user_id, :restaurant_id, :date, :time, :number_of_seats, :check_type)
  end

  def res_not_found
    render json: {error: "Reservation not found"}, status: :not_found
  end

  def res_invalid error
    render json: {error: error.message}, status: 422
  end
end
