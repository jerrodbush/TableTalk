class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :price, :open_time, :close_time, :capacity, :rest_image, :website, :longitude, :latitude, :avg_rating, :reservation_count, :reservation_with_seats_available, :reservations

  def reservations
    object.reservations.map do |reservation|
      {
        host: reservation.user.full_name,
        date: reservation.date,
        time: "#{reservation.time}0pm",
        party_size: reservation.number_of_seats,
        members: dinner_partners
      }
    end
  end

  def dinner_partners
    reservation_members = []
    object.reservations.map do |res|
      res.members.map do |member|
        reservation_members << member.user.full_name
      end
    end
    reservation_members
  end

end
