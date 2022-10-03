class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :video, :title, :content, :location, :likes
  has_one :user
end
