class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating
  has_one :lesson
  has_one :user
end
