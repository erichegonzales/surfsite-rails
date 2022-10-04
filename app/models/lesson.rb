class Lesson < ApplicationRecord
  belongs_to :coach
  paginates_per 12
end
