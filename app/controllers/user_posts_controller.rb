class UserPostsController < ApplicationController
     # GET /user/1/posts
    def index
        @posts = Post.where(user_id: params[:user_id]).order(:id).page params[:page]

        render json: @posts
    end
end
