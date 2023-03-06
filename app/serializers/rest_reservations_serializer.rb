class RestReservationsSerializer < ActiveModel::Serializer
  attributes :name, :myReservations

  def myReservations
    object.reservations.map do |myRes|
      {
        date: myRes.date,
        time: myRes.time,
        number_of_seats: myRes.number_of_seats,
      }
    end
  end
end
