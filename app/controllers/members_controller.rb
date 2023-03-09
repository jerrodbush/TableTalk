class MembersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :member_not_found

  def index
    render json: Member.all(), status: :ok
  end

  def show
    myMember = Member.find(params[:id])
    render json: myMember, status: :ok
  end

  def create
    newMember = Member.create!(strong_params)
    render json: newMember, status: :created
  end

  private

  def strong_params
    params.permit(:reservation_id, :user_id, :guest_check_type)
  end

  def member_not_found
    render json: {error: "Member not found"}, status: :not_found
  end
end
