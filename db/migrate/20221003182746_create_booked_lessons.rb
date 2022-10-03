class CreateBookedLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :booked_lessons do |t|
      t.string :date
      t.string :time
      t.references :lesson, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
