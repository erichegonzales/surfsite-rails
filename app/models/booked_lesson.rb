class BookedLesson < ApplicationRecord
  belongs_to :lesson
  belongs_to :user
  paginates_per 12
end
