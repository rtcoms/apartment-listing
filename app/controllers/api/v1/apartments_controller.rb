class Api::V1::ApartmentsController < ApplicationController
  def index
    @apartments = Apartment.all
    render json: @apartments, serializer: ApartmentSerializer
  end
end
