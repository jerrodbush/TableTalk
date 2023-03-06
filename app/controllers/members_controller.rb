class MembersController < ApplicationController

  def index
    render json: Member.all(), status: :ok
  end

end
