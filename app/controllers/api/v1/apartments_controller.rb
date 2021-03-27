class Api::V1::ApartmentsController < ApplicationController
  def index
    @apartments = ApartmentSearchService.new(search_params: params[:query]).execute
    @apartments= @apartments.order(:id).page(params[:page] || 1)
    render json: @apartments, serializer: ApartmentSerializer
  end
end
