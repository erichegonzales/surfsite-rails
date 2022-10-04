class UserBookedLessonsController < ApplicationController
  # GET /users/:id/booked_lessons
  def index
    @user_booked_lessons = BookedLesson.where(user_id: params[:user_id]).order(:id).page params[:page]

    render json: @user_booked_lessons
  end

  # GET users/:id//booked_lessons/:id
  def show
    render json: @user_booked_lesson
  end

  # DELETE users/:id/booked_lessons/:id
  def destroy
    @user_booked_lesson.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lesson
      @user_booked_lesson = BookedLesson.find(user_id: params[:user_id])
    end
end
