class SessionsController < ApplicationController
  def create
    user = User.find_by(username:params[:username])
    if user && user.authenticate(params[:password])
      render json: user, status: :ok
    else
      render json: { error: "Sorry, invalid username and/or password!"}, status: :unauthorized
    end
  end
end
