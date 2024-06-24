# spec/search_spec.rb
require_relative 'search'

RSpec.describe 'Search methods' do
  describe '#linear_search' do
    it 'returns true if the value is found in the array' do
      nums = [1, 2, 4, 9, 10, 22, 30]
      expect(linear_search(nums, 10)).to be true
    end

    it 'returns false if the value is not found in the array' do
      nums = [1, 2, 4, 9, 10, 22, 30]
      expect(linear_search(nums, 5)).to be nil
    end
  end
  describe '#binary_search' do
    it 'bineary_search' do
      nums = [1, 2, 4, 9, 10, 22, 30]
      expect(binary_search(nums, 22)).to eq(5)
    end
  end
end
