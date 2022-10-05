class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :location, :avg_rating
  belongs_to :coach
end
