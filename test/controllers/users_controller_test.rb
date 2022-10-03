require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference("User.count") do
      post users_url, params: { user: { bio: @user.bio, email: @user.email, experience: @user.experience, followers: @user.followers, following: @user.following, is_coach: @user.is_coach, name: @user.name, password_digest: @user.password_digest, picture: @user.picture, username: @user.username } }, as: :json
    end

    assert_response :created
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { bio: @user.bio, email: @user.email, experience: @user.experience, followers: @user.followers, following: @user.following, is_coach: @user.is_coach, name: @user.name, password_digest: @user.password_digest, picture: @user.picture, username: @user.username } }, as: :json
    assert_response :success
  end

  test "should destroy user" do
    assert_difference("User.count", -1) do
      delete user_url(@user), as: :json
    end

    assert_response :no_content
  end
end
