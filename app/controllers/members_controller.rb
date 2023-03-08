class MembersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :member_not_found

  def index
    render json: Member.all(), status: :ok
  end

  def show
    myMember = Member.find(params[:id])
    render json: myMember, status: :ok
  end

  private

  def member_not_found
    render json: {error: "Member not found"}, status: :not_found
  end
end
