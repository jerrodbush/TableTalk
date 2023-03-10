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
    account_sid = "AC62628129e81097591ef55c507d0185a7"
    auth_token = "180b6f4ee088ac1c73a7c641833dd878"
    client = Twilio::REST::Client.new(account_sid, auth_token)
    
    message = client.messages.create(
      to: "+1559-759-9410",
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
