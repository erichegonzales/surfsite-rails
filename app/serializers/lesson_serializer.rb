class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :description, :image, :location, :avg_rating
  belongs_to :coach
end
