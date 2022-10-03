require "test_helper"

class LessonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lesson = lessons(:one)
  end

  test "should get index" do
    get lessons_url, as: :json
    assert_response :success
  end

  test "should create lesson" do
    assert_difference("Lesson.count") do
      post lessons_url, params: { lesson: { avg_rating: @lesson.avg_rating, coach_id: @lesson.coach_id, description: @lesson.description, image: @lesson.image, location: @lesson.location, subtitle: @lesson.subtitle, title: @lesson.title } }, as: :json
    end

    assert_response :created
  end

  test "should show lesson" do
    get lesson_url(@lesson), as: :json
    assert_response :success
  end

  test "should update lesson" do
    patch lesson_url(@lesson), params: { lesson: { avg_rating: @lesson.avg_rating, coach_id: @lesson.coach_id, description: @lesson.description, image: @lesson.image, location: @lesson.location, subtitle: @lesson.subtitle, title: @lesson.title } }, as: :json
    assert_response :success
  end

  test "should destroy lesson" do
    assert_difference("Lesson.count", -1) do
      delete lesson_url(@lesson), as: :json
    end

    assert_response :no_content
  end
end
