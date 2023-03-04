class CommentSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :comment, :author
end
