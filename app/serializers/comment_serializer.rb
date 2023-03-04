class CommentSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :comment, :user_id
end
