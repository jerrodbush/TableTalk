class Restaurant < ApplicationRecord
  has_many :cuisines
  has_many :reservations
  has_many :ratings

  geocoded_by :address, :ssl_verify_mode => :none
end
