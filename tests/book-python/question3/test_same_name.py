def find_same_name(names):
  length = len(names)
  result = set()
  for i in range(1, length - 1):
    for j in range(i + 1, length):
      if(names[i] == names[j]):
        result.add(names[i])
  return result

class TestQuestion:
  def test_find_same_name(self):
    names = ['김현기', '김이안', '신수연', '김이안', "신수연"]
    actual = find_same_name(names)
    expected = {'김이안', '신수연'}
    assert expected == actual