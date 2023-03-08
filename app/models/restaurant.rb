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
    avg_rating = my_rating / self.ratings.length
    avg_rating.round(1)
  end

  def reservation_count
    self.reservations.length
  end

  def reservation_with_seats_available
    res_details = self.reservations.map do |reservation|
      {
        date_and_time: "#{reservation.date}: #{reservation.time.to_s}0pm",
        party_size: reservation.number_of_seats
      }
    end
    res_vacancy = {}
    res_details.each do |res|
      if res_vacancy.has_key?(res[:date_and_time])
        res_vacancy[res[:date_and_time]] += res[:party_size]
      else
        res_vacancy[res[:date_and_time]] = res[:party_size]
      end
    end
    res_vacancy.sort_by(&:first).to_h
    res_vacancy.map { |k, v| [k, self.capacity - v] }.to_h
  end
end
