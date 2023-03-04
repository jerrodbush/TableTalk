class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_many :comments
  has_many :interests
end
