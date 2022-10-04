class CoachLessonsController < ApplicationController
    # GET /coach/:id/lessons
    def index
        @lessons = Lesson.where(coach_id: params[:coach_id]).order(:id).page params[:page]

        render json: @lessons
    end

end
