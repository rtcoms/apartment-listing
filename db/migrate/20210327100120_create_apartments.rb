class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :title, null: false
      t.integer :price, null: false
      t.integer :area, null: false
      t.integer :number_of_bedrooms, null: false
      t.integer :number_of_bathrooms, null: false
      t.string :image, null: false

      t.timestamps
    end
  end
end
