require 'rails_helper'
require 'json_expressions/rspec'

RSpec.describe ApartmentSerializer, type: :serializer do
  it 'should serialized attributes of apartment' do
    apartment = create(:apartment)
    serialized_apartment = ApartmentSerializer.new(apartment).serializable_hash

    expected_output = {
      data: {
        id: apartment.id.to_s,
        type: :apartment,
        attributes: {
          id: apartment.id,
          title: apartment.title,
          price: apartment.price,
          area: apartment.area,
          number_of_bedrooms: apartment.number_of_bedrooms,
          number_of_bathrooms: apartment.number_of_bathrooms,
          image: apartment.image
        }

      }
    }

    expect(serialized_apartment).to match_json_expression(expected_output)
  end
end
