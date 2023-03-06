class UsersController < ApplicationController
  def index
    render json: User.all(), status: :ok
  end

  def show
    myUser = User.find(params[:id])
    render json: myUser, serializer: ShowUserWithResSerializer, status: :ok
  end

  def create
    newUser = User.create!(strong_params)
    render json: newUser, status: :created
  end

  def update
    myUser = User.find(params[:id])
    if myUser.update(strong_params)
      render json: myUser, status: :ok
    else
      render json: { errors: myUser.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    User.find(params[:id]).destroy!
    head :no_content
  end

  private

  def strong_params
    params.permit(:first_name, :last_name, :age, :phone, :email, :location, :password, :user_image)
  end
end
