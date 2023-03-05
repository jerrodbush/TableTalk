class Restaurant < ApplicationRecord
  has_many :cuisines
  has_many :reservations
  has_many :ratings
end
