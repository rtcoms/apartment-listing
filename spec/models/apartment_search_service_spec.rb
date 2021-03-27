require 'rails_helper'

RSpec.describe ApartmentSearchService do
  context 'search' do
    let!(:apartment_villa) { create(:apartment, title: 'Villa', price: 500000, area: 5000, number_of_bedrooms: 5, number_of_bathrooms: 3) }
    let!(:apartment_flat_2bhk) { create(:apartment, title: 'Flat 2bhk', price: 50000, area: 500, number_of_bedrooms: 2, number_of_bathrooms: 1) }
    let!(:apartment_flat_3bhk) { create(:apartment, title: 'Flat 3bhk', price: 150000, area: 1500, number_of_bedrooms: 3, number_of_bathrooms: 2) }
    let!(:apartment_studio) { create(:apartment, title: 'Flat Studio', price: 100000, area: 1000, number_of_bedrooms: 1, number_of_bathrooms: 1) }

    it 'should return search by title' do
      expect(ApartmentSearchService.new(search_params: { query: 'vil' }).execute).to match_array([apartment_villa])
    end

    it 'should search by price less than equal to' do
      expect(ApartmentSearchService.new(search_params: { price_lte: 100000 }).execute).to match_array([apartment_flat_2bhk, apartment_studio])
    end

    it 'should search by price greater than equal to' do
      expect(ApartmentSearchService.new(search_params: { price_gte: 100000 }).execute).to match_array([apartment_studio, apartment_flat_3bhk, apartment_villa])
    end

    it 'should search by area less than equal to' do
      expect(ApartmentSearchService.new(search_params: { area_lte: 1000 }).execute).to match_array([apartment_flat_2bhk, apartment_studio])
    end

    it 'should search by area greater than equal to' do
      expect(ApartmentSearchService.new(search_params: { area_gte: 1500 }).execute).to match_array([apartment_flat_3bhk, apartment_villa])
    end

    it 'should search by bedroom greater than equal to' do
      expect(ApartmentSearchService.new(search_params: { number_of_bedrooms_gte: 2 }).execute).to match_array([apartment_flat_2bhk, apartment_flat_3bhk, apartment_villa])
    end

    it 'should search by bathroom greater than equal to' do
      expect(ApartmentSearchService.new(search_params: { number_of_bathrooms_gte: 2 }).execute).to match_array([apartment_flat_3bhk, apartment_villa])
    end
  end
end
