class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found

  def index
    frank = User.all()
    render json: User.all(), status: :ok
  end

  def show
    myUser = User.find(params[:id])
    render json: myUser, status: :ok
    
    #Try number 2
    # user = User.find_by(id: session[:user_id])
    # if user
    #   render json: user
    # else
    #   render json: { error: "Not authorized" }, status: :unauthorized
    # end

    #Try number 3
    # render json: @current_user
  end

  def create
    newUser = User.create!(strong_params)
    session[:user_id] = newUser.id
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
  #MOVED TO APPLICATION CONTROLER
  # def authenticate_show
  #   myUser = User.find_by(id: session[:user_id])
  #   if user
  #     render json: myUser, serializer: ShowUserWithResSerializer, status: :ok
  #   else
  #     render json: {error: "Not authorized."}, status: 401
  #   end
  # end

  private

  def strong_params
    params.permit(:first_name, :last_name, :age, :phone, :email, :location, :password, :user_image, :username)
  end

  def user_not_found
    render json: {error: "User not found"}, status: :not_found
  end
end
