class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest, :bio, :picture, :followers, :following, :experience_level, :is_coach
  has_many :posts
  has_many :reviews
  has_many :comments
end
