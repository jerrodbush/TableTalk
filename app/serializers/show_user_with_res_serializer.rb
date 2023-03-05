class ShowUserWithResSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :phone, :age, :email, :location, :reservations

  def reservations
    object.reservations.map do |myRes|
      {
        name: myRes.restaurant.name,
        address: myRes.restaurant.address,
        date: myRes.date,
        time: myRes.time,
        number_of_seats: myRes.number_of_seats,
        check_type: myRes.check_type
      }
    end
  end

end
