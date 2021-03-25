def max_num(list):
  l = len(list)
  max_v = list[0]
  for i in range(1, l):
    if list[i] > max_v:
      max_v = list[i] 
  return max_v

def find_max_num(list):
  l = len(list)
  max_idx = 0  
  for i in range(1, l):
    if list[i] > list[max_idx]:
      max_idx = i
  return max_idx

def test_max():
  numbers = [17, 92, 18, 33, 58, 7, 33, 42];
  expected = 92
  actual = max(numbers)
  assert expected == actual


def test_max2():
  numbers = [17, 92, 18, 33, 58, 7, 33, 42];
  expected = 92
  actual = max_num(numbers)
  assert expected == actual

def test_find_max_location():
  numbers = [17, 92, 18, 33, 58, 7, 33, 42];
  expected = 1 
  actual = find_max_num(numbers)
  assert expected == actual