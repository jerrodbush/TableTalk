class SessionsController < ApplicationController
  def create
    user = User.find_by(username:params[:username])
    print(user)
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: "Sorry, invalid username and/or password!"}, status: :unauthorized
    end
  end

  def destroy
    # deleting user_id from our hash
    session.delete :user_id
    head :no_content
  end
end
