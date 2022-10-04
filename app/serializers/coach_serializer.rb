class CoachSerializer < ActiveModel::Serializer
  attributes :id, :certifications, :coaching_experience
  belongs_to :user
  has_many :lessons
end
