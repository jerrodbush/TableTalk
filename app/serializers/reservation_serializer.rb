class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :host, :restaurant_id, :date, :time, :number_of_seats, :check_type, :restaurant, :members, :interests

  def host
    {
      name: object.user.full_name
    }
  end
end
