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

ActiveRecord::Schema[7.0].define(version: 2023_03_04_221522) do
  create_table "comments", force: :cascade do |t|
    t.integer "reservation_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "cuisines", force: :cascade do |t|
    t.integer "restaurant_id"
    t.string "cuz_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interests", force: :cascade do |t|
    t.integer "reservation_id"
    t.string "interest"
    t.integer "priority"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "restaurant_id"
    t.float "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id"
    t.integer "restaurant_id"
    t.string "date"
    t.float "time"
    t.integer "number_of_seats"
    t.string "check_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "address"
    t.string "price"
    t.integer "open_time"
    t.integer "close_time"
    t.integer "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "rest_image"
    t.string "website"
    t.float "longitude"
    t.float "latitude"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.integer "age"
    t.string "username"
    t.string "email"
    t.string "location"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_image"
  end

end
