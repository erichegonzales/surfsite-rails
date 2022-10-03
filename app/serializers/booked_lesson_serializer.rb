class BookedLessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :time
  has_one :lesson
  has_one :user
end
