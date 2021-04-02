# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

apartment_identifier = Apartment.count
100.times do |i|
  Apartment.create(
    title: "Apartment #{apartment_identifier + i + 1}",
    price: (50000..500000).to_a.sample,
    area: (300..5000).to_a.sample,
    number_of_bathrooms: [1,2,3,4].sample,
    number_of_bedrooms: [1,2,3].sample,
    image: 'https://images.unsplash.com/photo-1486304873000-235643847519'
  )
end
