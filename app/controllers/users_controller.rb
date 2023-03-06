class UsersController < ApplicationController
  def index
    render json: User.all(), status: :ok
  end

  def show
    myUser = User.find(params[:id])
    render json: myUser, serializer: ShowUserWithResSerializer, status: :ok
  end
end
