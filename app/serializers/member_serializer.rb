class MemberSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :user_id, :guest_check_type

end