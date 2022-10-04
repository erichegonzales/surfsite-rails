class CoachLessonsController < ApplicationController
    # GET /coach/1/lessons
    def index
        @lessons = Lesson.where(coach_id: params[:coach_id]).order(:id).page params[:page]

        render json: @lessons
    end

end
