class ApartmentSearchService
  def initialize(search_params: {})
    @search_params = search_params
  end

  def execute
    [default_query,
     title_search_query,
     bedroom_count_query,
     bathroom_count_query,
     price_query_gte,
     price_query_lte,
     area_query_gte,
     area_query_lte].compact.inject(:merge)
  end

  private

  def default_query
    Apartment.all
  end

  def title_search_query
    return unless @search_params[:query].present?

    Apartment.where('lower(title) like :search_text', search_text: "%#{@search_params[:query]}%")
  end

  def bedroom_count_query
    return unless @search_params[:number_of_bedrooms].present?

    Apartment.where(number_of_bedrooms: @search_params[:number_of_bedrooms]..)
  end

  def bathroom_count_query
    return unless @search_params[:number_of_bathooms].present?

    Apartment.where(number_of_bathrooms: @search_params[:number_of_bathooms]..)
  end

  def price_query_gte
    return unless @search_params[:price_gte].present?

    Apartment.where(price: @search_params[:price_gte]..)
  end

  def price_query_lte
    return unless @search_params[:price_lte].present?

    Apartment.where(price: ..@search_params[:price_lte])
  end

  def area_query_gte
    return unless @search_params[:area_gte].present?

    Apartment.where(area: @search_params[:area_gte]..)
  end

  def area_query_lte
    return unless @search_params[:area_lte].present?

    Apartment.where(area: ..@search_params[:area_lte])
  end
end
