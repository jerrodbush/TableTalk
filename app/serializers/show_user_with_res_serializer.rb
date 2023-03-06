class ShowUserWithResSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :phone, :age, :email, :location, :myRes

  def myRes
    object.reservations.map do |myRes|
      {
        restaurant: myRes.restaurant.name,
        address: myRes.restaurant.address,
        date: myRes.date,
        time: myRes.time,
        number_of_seats: myRes.number_of_seats,
        check_type: myRes.check_type,
        # members: myRes.members
        members: myRes.members.map do |myMember|
          {
            name: myMember.user.last_name,
            phone: myMember.user.phone,
            email: myMember.user.email
          }
        end
      }
    end
  end
end
