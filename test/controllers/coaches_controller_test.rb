require "test_helper"

class CoachesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coach = coaches(:one)
  end

  test "should get index" do
    get coaches_url, as: :json
    assert_response :success
  end

  test "should create coach" do
    assert_difference("Coach.count") do
      post coaches_url, params: { coach: { certifications: @coach.certifications, coaching_experience: @coach.coaching_experience } }, as: :json
    end

    assert_response :created
  end

  test "should show coach" do
    get coach_url(@coach), as: :json
    assert_response :success
  end

  test "should update coach" do
    patch coach_url(@coach), params: { coach: { certifications: @coach.certifications, coaching_experience: @coach.coaching_experience } }, as: :json
    assert_response :success
  end

  test "should destroy coach" do
    assert_difference("Coach.count", -1) do
      delete coach_url(@coach), as: :json
    end

    assert_response :no_content
  end
end
