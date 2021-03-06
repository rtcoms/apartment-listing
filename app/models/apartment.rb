class Apartment < ApplicationRecord
  paginates_per 3
  validates :title,:price, :area, :image, :number_of_bathrooms, :number_of_bedrooms, presence: true
end
