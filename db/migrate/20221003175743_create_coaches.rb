class CreateCoaches < ActiveRecord::Migration[7.0]
  def change
    create_table :coaches do |t|
      t.string :certifications
      t.string :coaching_experience
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
