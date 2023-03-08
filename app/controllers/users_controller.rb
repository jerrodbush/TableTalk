class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

  def index
    frank = User.all()
    render json: User.all(), status: :ok
  end

  def show
    # if find_by messes stuff up we can change it back to find
    # myUser = User.find(session[:user_id])
    myUser = User.find_by(id: session[:user_id])
    if user
      render json: myUser, serializer: ShowUserWithResSerializer, status: :ok
    else
      render json: {error: "Not authorized."}, status: 401
    end
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
    params.permit(:first_name, :last_name, :age, :phone, :email, :location, :password, :user_image, :username)
  end

  def user_not_found
    render json: {error: "User not found"}, status: :not_found
  end
end
