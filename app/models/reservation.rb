class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_many :comments, dependent: :destroy
  has_many :interests, dependent: :destroy
  has_many :members, dependent: :destroy

  validates :user_id, :restaurant_id, :date, presence: true
  validates :time, inclusion: {in: 5..11}
  validates :number_of_seats, inclusion: {in: 2..8}
  validates :check_type, inclusion: {in: ["Host pays", "Members pay", "Split check"]}
  # add validation for date????

  # STRETCH GOAL: add custom validation to check num_of_seats against rest capacity
end
