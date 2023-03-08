class ResWithNameSerializer < ActiveModel::Serializer
  attributes :id, :host, :restaurant_id, :date, :time, :number_of_seats, :check_type, :restaurant, :members, :interests

  def host
    {
      id: object.user.id,
      name: object.user.full_name
    }
  end

  def interests
    object.interests.map do |interest|
      {
        interests: interest.interest,
        priority: interest.priority
      }
    end
  end
end
