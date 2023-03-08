class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :phone, :age, :username, :email, :location, :password_digest, :user_image, :dinner_partners, :my_interests

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
