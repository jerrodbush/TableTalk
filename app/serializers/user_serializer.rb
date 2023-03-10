class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :phone, :age, :username, :email, :location, :password_digest, :user_image, :dinner_partners, :my_interests, :reservations

  def dinner_partners
    object.reservations.map do |res|
      res.members.map do |member|
        {
          id: member.user.id,
          name: member.user.full_name
        }
      end
    end
  end

  def reservations
    object.reservations.map do |myRes|
      {
        id: myRes.id,
        host_name: myRes.user.full_name,
        rest_id: myRes.restaurant.id,
        restaurant: myRes.restaurant.name,
        address: myRes.restaurant.address,
        date: myRes.date,
        time: myRes.time,
        number_of_seats: myRes.number_of_seats,
        check_type: myRes.check_type,
        rest_image: myRes.restaurant.rest_image,
        members: myRes.members.map do |myMember|
          {
            id: myMember.user.id,
            name: myMember.user.full_name,
            phone: myMember.user.phone,
            email: myMember.user.email
          }
        end
      }
    end
  end

  def my_interests
    full_interests = []
    object.members.map do |member|
      member.reservation.interests.map do |interest|
          full_interests << interest.interest
      end
    end
    object.reservations.map do |res|
      res.interests.map do |interest|
        full_interests << interest.interest
      end
    end
    full_interests
  end

end
