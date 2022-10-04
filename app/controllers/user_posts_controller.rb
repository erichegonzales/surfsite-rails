class UserPostsController < ApplicationController
     # GET /user/:id/posts
    def index
        @posts = Post.where(user_id: params[:user_id]).order(:id).page params[:page]

        render json: @posts
    end
end
