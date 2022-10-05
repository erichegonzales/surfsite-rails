class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :video, :title, :caption, :location, :likes
  belongs_to :user
  has_many :comments
end
