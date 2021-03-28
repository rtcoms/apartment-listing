class Api::V1::ApartmentsController < ApplicationController
  def index
    @apartments = ApartmentSearchService.new(search_params: params[:query]).execute
    @paginated_apartments = @apartments.order(:id).page(params[:page] || 1)

    render json: paginated_apartments_as_json(@paginated_apartments)
  end

  private

  def paginated_apartments_as_json(apartments)
    {
      apartments: ApartmentSerializer.new(apartments).as_json,
      total: apartments.total_count,
      page: apartments.current_page,
      total_pages: apartments.total_pages,
      page_item_count: apartments.size,
      is_first_page: apartments.first_page?,
      is_last_page: apartments.last_page?
    }
  end
end
