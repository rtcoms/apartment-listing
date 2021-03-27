class ApartmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :price, :area, :number_of_bedrooms, :number_of_bathrooms, :image
            :created_at
end
