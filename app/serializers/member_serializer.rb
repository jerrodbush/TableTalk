class MemberSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :user_id, :guest_check_type, :details_for_reservation_as_member

end