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
    image: ['https://images.unsplash.com/photo-1486304873000-235643847519', 'https://images.unsplash.com/photo-1507149833265-60c372daea22',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', 'https://images.unsplash.com/photo-1534595038511-9f219fe0c979',
            'https://images.unsplash.com/photo-1495433324511-bf8e92934d90', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'].sample
  )
end
