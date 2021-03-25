import math

def binary_search(array, value):
  lower_bound = 0
  upper_bound = len(array)
  while lower_bound <= upper_bound:
    mid_bound = math.ceil((lower_bound + upper_bound) / 2)
    if value == array[mid_bound]:
      return mid_bound
    elif value > array[mid_bound]:
      lower_bound = mid_bound + 1 
    elif value < array[mid_bound]:
      max_bound = mid_bound - 1

def test_binary_search():
  nums = [1, 2, 4, 9, 10, 22, 30]
  expected = 6 
  actual = binary_search(nums, 30)
  assert expected == actual  


