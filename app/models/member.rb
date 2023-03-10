class Member < ApplicationRecord
  belongs_to :reservation
  belongs_to :user

  validates :reservation_id, presence: { message: "Please add a reservation Number" }
  validates :guest_check_type, presence: { message: "Please add a check type" }
  validates :user_id, presence: { message: "Please add a host id" }

  def details_for_reservation_as_member
    {
      Member_Name: self.user.full_name,
      Restaurant: self.reservation.restaurant.name,
      Date: self.reservation.date,
      Time: self.reservation.time,
      Host: self.reservation.user.full_name,
      Check_Type: member.reservation.check_type,
      Interests: self.reservation_interests
    }
  end

  def reservation_interests
    self.reservation.interests.map do |interest|
      interest.interest
    end
  end
end
