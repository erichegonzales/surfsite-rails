class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest, :bio, :picture, :followers, :following, :experience_level, :is_coach
end
