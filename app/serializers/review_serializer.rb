class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating
  belongs_to :lesson
  belongs_to :user
end
