# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_03_182825) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "booked_lessons", force: :cascade do |t|
    t.string "date"
    t.string "time"
    t.bigint "lesson_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lesson_id"], name: "index_booked_lessons_on_lesson_id"
    t.index ["user_id"], name: "index_booked_lessons_on_user_id"
  end

  create_table "coaches", force: :cascade do |t|
    t.string "certifications"
    t.string "coaching_experience"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_coaches_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "description"
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.string "title"
    t.string "subtitle"
    t.string "description"
    t.string "image"
    t.string "location"
    t.integer "avg_rating"
    t.bigint "coach_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coach_id"], name: "index_lessons_on_coach_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "image"
    t.string "video"
    t.string "title"
    t.string "content"
    t.string "location"
    t.integer "likes"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "rating"
    t.bigint "lesson_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lesson_id"], name: "index_reviews_on_lesson_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "bio"
    t.string "picture"
    t.integer "followers"
    t.integer "following"
    t.string "experience_level"
    t.boolean "is_coach"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "booked_lessons", "lessons"
  add_foreign_key "booked_lessons", "users"
  add_foreign_key "coaches", "users"
  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "lessons", "coaches"
  add_foreign_key "posts", "users"
  add_foreign_key "reviews", "lessons"
  add_foreign_key "reviews", "users"
end
