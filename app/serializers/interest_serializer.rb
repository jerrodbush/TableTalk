class InterestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :interest, :priority
end
