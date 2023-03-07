class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  private
  def record_invalid error
    render json: {error: error.message}, status: 422
  end
end
