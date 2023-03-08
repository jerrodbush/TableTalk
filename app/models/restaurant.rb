class Restaurant < ApplicationRecord
  has_many :cuisines
  has_many :reservations
  has_many :users, through: :reservations
  has_many :ratings

  def avg_rating
    my_rating = 0
    self.ratings.map do |rating|
      my_rating = my_rating + rating.rating
    end
    my_rating / self.ratings.length
  end
end
