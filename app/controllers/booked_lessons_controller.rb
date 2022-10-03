class BookedLessonsController < ApplicationController
  before_action :set_booked_lesson, only: %i[ show update destroy ]

  # GET /booked_lessons
  def index
    @booked_lessons = BookedLesson.all

    render json: @booked_lessons
  end

  # GET /booked_lessons/1
  def show
    render json: @booked_lesson
  end

  # POST /booked_lessons
  def create
    @booked_lesson = BookedLesson.new(booked_lesson_params)

    if @booked_lesson.save
      render json: @booked_lesson, status: :created, location: @booked_lesson
    else
      render json: @booked_lesson.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /booked_lessons/1
  def update
    if @booked_lesson.update(booked_lesson_params)
      render json: @booked_lesson
    else
      render json: @booked_lesson.errors, status: :unprocessable_entity
    end
  end

  # DELETE /booked_lessons/1
  def destroy
    @booked_lesson.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booked_lesson
      @booked_lesson = BookedLesson.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booked_lesson_params
      params.require(:booked_lesson).permit(:date, :time, :lesson_id, :user_id)
    end
end
