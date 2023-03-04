class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :comment_id, :date, :time, :number_of_seats, :check_type
end
