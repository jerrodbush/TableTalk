class ResWithNameSerializer < ActiveModel::Serializer
  attributes :id, :host, :restaurant_id, :date, :time, :number_of_seats, :check_type, :restaurant, :members

  def host
    {
      id: object.user.id,
      name: object.user.full_name
    }
  end
end
