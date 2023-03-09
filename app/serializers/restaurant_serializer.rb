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

  # def my_interests
  #   full_interests = []
  #   object.members.map do |member|
  #     member.reservation.interests.map do |interest|
  #         full_interests << interest.interest
  #     end
  #   end
  #   object.reservations.map do |res|
  #     res.interests.map do |interest|
  #       full_interests << interest.interest
  #     end
  #   end
  #   full_interests
  # end

#   {
#     "id": 13,
#     "user_id": 65,
#     "restaurant_id": 28,
#     "date": "03-10-23",
#     "time": 6.0,
#     "number_of_seats": 5,
#     "check_type": "Host pays",
#     "created_at": "2023-03-08T19:15:48.357Z",
#     "updated_at": "2023-03-08T19:15:48.357Z"
# },
end
