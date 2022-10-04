class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description
  # belongs_to :user
  # belongs_to :post
end
