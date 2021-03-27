class ApartmentSearchService
  def initialize(search_params:)
    @search_params = search_params || {}
    @query = @search_params[:query]
    @bedroom_gte_param = @search_params[:number_of_bedrooms_gte]
    @bathroom_gte_param = @search_params[:number_of_bathrooms_gte]
    @price_gte_param = @search_params[:price_gte]
    @price_lte_param = @search_params[:price_lte]
    @area_gte_param = @search_params[:area_gte]
    @area_lte_param = @search_params[:area_lte]
  end

  def execute
    [default_query,
     title_search_query,
     bedroom_gte_query,
     bathroom_gte_query,
     price_gte_query,
     price_lte_query,
     area_gte_query,
     area_lte_query].compact.inject(:merge)
  end

  private

  def default_query
    Apartment.all
  end

  def title_search_query
    return unless @query.present?

    Apartment.where('lower(title) like :search_text', search_text: "%#{@query}%")
  end

  def bedroom_gte_query
    return unless @bedroom_gte_param.present?

    Apartment.where(number_of_bedrooms: @bedroom_gte_param..)
  end

  def bathroom_gte_query
    return unless @bathroom_gte_param.present?

    Apartment.where(number_of_bathrooms: @bathroom_gte_param..)
  end

  def price_gte_query
    return unless @price_gte_param.present?

    Apartment.where(price: @price_gte_param..)
  end

  def price_lte_query
    return unless @price_lte_param.present?

    Apartment.where(price: ..@price_lte_param)
  end

  def area_gte_query
    return unless @area_gte_param.present?

    Apartment.where(area: @area_gte_param..)
  end

  def area_lte_query
    return unless @area_lte_param.present?

    Apartment.where(area: ..@area_lte_param)
  end
end
