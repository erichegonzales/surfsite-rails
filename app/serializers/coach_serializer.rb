class CoachSerializer < ActiveModel::Serializer
  attributes :id, :certifications, :coaching_experience
  has_one :user
end
