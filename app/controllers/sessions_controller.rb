class SessionsController < ApplicationController
  # skip_before_action :authorize

  def create
    user = User.find_by(username:params[:username])
    render json: user, status: :ok
    # if user&.authenticate(params[:password])
    #   # session[:user_id] = user.id
    #   # render json: user, status: :ok
    #   render json: { error: "You hit me!"}, status: :ok
    # else
    #   render json: { error: "Sorry, invalid username and/or password!"}, status: :unauthorized
    # end
  end

  def destroy
    # deleting user_id from our hash
    session.delete :user_id
    head :no_content
  end
end
