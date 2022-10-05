class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :description
      t.string :image
      t.string :location
      t.integer :avg_rating
      t.references :coach, null: false, foreign_key: true

      t.timestamps
    end
  end
end
