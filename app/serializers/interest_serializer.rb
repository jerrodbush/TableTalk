class InterestSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :interest, :priority
end
