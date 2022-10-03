class User < ApplicationRecord
    has_many :posts
    has_many :comments
    has_many :lessons
    has_many :booked_lessons
    has_many :reviews
end
