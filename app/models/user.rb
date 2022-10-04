class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :booked_lessons, dependent: :destroy
end
