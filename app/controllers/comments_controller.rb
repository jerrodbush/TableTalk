class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :comment_not_found
  def index
    render json: Comment.all(), status: :ok
  end

  def show
    myComment = Comment.find(params[:id])
    render json: myComment, status: :ok
  end

  private

  def comment_not_found
    render json: {error: "Comment not found"}, status: :not_found
  end
end
