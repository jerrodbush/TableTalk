class User < ApplicationRecord
  has_many :reservations
  has_many :restaurants, through: :reservations
  has_many :interests, through: :reservations
  has_many :comments, through: :reservations
  has_many :ratings
  has_many :members, through: :reservations

end
