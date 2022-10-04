class BookedLessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :time
  belongs_to :lesson
  belongs_to :user
end
