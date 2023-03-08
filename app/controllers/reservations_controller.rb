require 'yaml'
CONFIG = YAML.load_file('config.yml')

class ReservationsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :res_not_found

  def index
    render json: Reservation.all(), status: :ok
  end

  def show
    render json: Reservation.find(params[:id]), serializer: ResWithNameSerializer,status: :ok
  end

  def create
    newRes = Reservation.create!(strong_params)

    account_sid = CONFIG['account_sid']
    auth_token = CONFIG['auth_token']
    client = Twilio::REST::Client.new(account_sid, auth_token)
    message = client.messages.create(
        to: "+13129091825",
        from: "+12182978244",
        body: "You've booked a reservation on TableTalk! Details: #{newRes.time}pm @ #{newRes.restaurant.name}"
        )

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
end
