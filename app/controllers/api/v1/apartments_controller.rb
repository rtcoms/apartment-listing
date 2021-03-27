class Api::V1::ApartmentsController < ApplicationController
  def index
    @apartments = ApartmentSearchService.new(search_params: params[:query]).execute

    render json: @apartments, serializer: ApartmentSerializer
  end
end
