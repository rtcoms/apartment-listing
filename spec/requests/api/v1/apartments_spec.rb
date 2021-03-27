require 'rails_helper'
require 'json_expressions/rspec'

RSpec.describe "Api::V1::Apartments", type: :request do
  describe "GET /index" do
    it "returns http success" do
      apartments = create_list(:apartment, 10)
      get "/api/v1/apartments/index"

      expected_response = [
        { id: apartments[0].id, title: apartments[0].title }.ignore_extra_keys!,
        { id: apartments[1].id, title: apartments[2].title }.ignore_extra_keys!,
        { id: apartments[2].id, title: apartments[3].title }.ignore_extra_keys!,
        { id: apartments[3].id, title: apartments[4].title }.ignore_extra_keys!,
        { id: apartments[4].id, title: apartments[4].title }.ignore_extra_keys!,
        { id: apartments[5].id, title: apartments[5].title }.ignore_extra_keys!,
        { id: apartments[6].id, title: apartments[6].title }.ignore_extra_keys!,
        { id: apartments[7].id, title: apartments[7].title }.ignore_extra_keys!,
        { id: apartments[8].id, title: apartments[8].title }.ignore_extra_keys!,
        { id: apartments[9].id, title: apartments[0].title }.ignore_extra_keys!,
      ]
      expect(response).to be_successful



      expect(response).to have_http_status(:success)
      expect(response.body.as_json).to match_json_expression(expected_response)
    end
  end

end
