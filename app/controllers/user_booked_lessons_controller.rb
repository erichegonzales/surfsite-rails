class UserBookedLessonsController < ApplicationController
  # GET users/1/booked_lessons
  def index
    @user_booked_lessons = BookedLesson.where(user_id: params[:user_id]).order(:id).page params[:page]

    render json: @user_booked_lessons
  end
end
