class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :description, :image, :location, :avg_rating
  has_one :coach
end
