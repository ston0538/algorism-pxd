def is_prime(number):
  for i in range(2, number):
    if number % i == 0:
      return False
  return True

def test_prime():
    expected = True
    actual = is_prime(3)
    assert expected == actual