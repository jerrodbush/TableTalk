class Comment < ApplicationRecord
  belongs_to :reservation

  validates :reservation_id, :user_id, :comment, presence: true
end
