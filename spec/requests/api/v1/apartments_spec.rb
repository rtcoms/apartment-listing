require 'rails_helper'
require 'json_expressions/rspec'

RSpec.describe "Api::V1::Apartments", type: :request do
  describe "GET /index" do
    let!(:apartment_villa) { create(:apartment, title: 'Villa', price: 500000, area: 5000, number_of_bedrooms: 5, number_of_bathrooms: 3) }
    let!(:apartment_flat_2bhk) { create(:apartment, title: 'Flat 2bhk', price: 50000, area: 500, number_of_bedrooms: 2, number_of_bathrooms: 1) }
    let!(:apartment_flat_3bhk) { create(:apartment, title: 'Flat 3bhk', price: 150000, area: 1500, number_of_bedrooms: 3, number_of_bathrooms: 2) }
    let!(:apartment_studio) { create(:apartment, title: 'Flat Studio', price: 100000, area: 1000, number_of_bedrooms: 1, number_of_bathrooms: 1) }

    it "returns http success" do
      get "/api/v1/apartments/index"

      expected_response = [
        { id: apartment_villa.id, title: apartment_villa.title }.ignore_extra_keys!,
        { id: apartment_flat_2bhk.id, title: apartment_flat_2bhk.title }.ignore_extra_keys!,
        { id: apartment_flat_3bhk.id, title: apartment_flat_3bhk.title }.ignore_extra_keys!,
        { id: apartment_studio.id, title: apartment_studio.title }.ignore_extra_keys!,
      ]

      expect(response).to be_successful
      expect(response).to have_http_status(:success)
      expect(response.body.as_json).to match_json_expression(expected_response)
    end

    it "returns http success" do
      get "/api/v1/apartments/index", params: {query: { number_of_bedrooms_gte: 2, number_of_bathrooms_gte: 2, area_gte: 1500, price_gte: 500000 }}

      expected_response = [
        { id: apartment_villa.id, title: apartment_villa.title }.ignore_extra_keys!,
      ]

      expect(response).to be_successful
      expect(response).to have_http_status(:success)
      expect(response.body.as_json).to match_json_expression(expected_response)
    end
  end

end
