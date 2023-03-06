class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  private
  def record_invalid error
    render json: {error: error.message}, status: 422
  end
end
