class ShowUserWithResSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :phone, :age, :email, :location, :reservations, :members

  def reservations
    object.reservations.map do |myRes|
      {
        id: myRes.id,
        rest_id: myRes.restaurant.id,
        restaurant: myRes.restaurant.name,
        address: myRes.restaurant.address,
        date: myRes.date,
        time: myRes.time,
        number_of_seats: myRes.number_of_seats,
        check_type: myRes.check_type,
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

  def members
    object.members.map do |myMember|
      {
        id: myMember.id,
        restaurant: myMember.reservation.restaurant.name,
        host: myMember.reservation.user.full_name,
        date: myMember.reservation.date,
        time: myMember.reservation.time,
        payment: myMember.reservation.check_type
      }
    end
  end

end
