require "test_helper"

class BookedLessonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @booked_lesson = booked_lessons(:one)
  end

  test "should get index" do
    get booked_lessons_url, as: :json
    assert_response :success
  end

  test "should create booked_lesson" do
    assert_difference("BookedLesson.count") do
      post booked_lessons_url, params: { booked_lesson: { date: @booked_lesson.date, lesson_id: @booked_lesson.lesson_id, time: @booked_lesson.time, user_id: @booked_lesson.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show booked_lesson" do
    get booked_lesson_url(@booked_lesson), as: :json
    assert_response :success
  end

  test "should update booked_lesson" do
    patch booked_lesson_url(@booked_lesson), params: { booked_lesson: { date: @booked_lesson.date, lesson_id: @booked_lesson.lesson_id, time: @booked_lesson.time, user_id: @booked_lesson.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy booked_lesson" do
    assert_difference("BookedLesson.count", -1) do
      delete booked_lesson_url(@booked_lesson), as: :json
    end

    assert_response :no_content
  end
end
