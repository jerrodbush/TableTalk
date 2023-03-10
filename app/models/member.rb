class Member < ApplicationRecord
  belongs_to :reservation
  belongs_to :user

  validates :reservation_id, presence: { message: "Please add a reservation Number" }
  validates :guest_check_type, presence: { message: "Please add a check type" }
  validates :user_id, presence: { message: "Please add a host id" }
end
