require 'rails_helper'

RSpec.describe Apartment, type: :model do
  context 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:area) }
    it { should validate_presence_of(:number_of_bedrooms) }
    it { should validate_presence_of(:number_of_bathrooms) }
    it { should validate_presence_of(:image) }
  end
end
