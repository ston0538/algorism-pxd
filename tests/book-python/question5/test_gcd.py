def measure(number):
  result = []
  for i in range(1, number + 1):
    if number % i == 0:
      result.append(i)
  return result 

def common_factor(number1, number2):
  result = []
  measure1 = measure(number1)
  measure2 = measure(number2)
  for i in range(0, len(measure1) - 1):
    for j in range(0, len(measure2) -1):
      if measure1[i] == measure2[j]:
        result.append(measure1[i])
  return result

def gcd(number1, number2):
  cf = common_factor(number1, number2)
  return max(cf)

def book_gcd(num1, num2):
  i = min(num1, num2)
  while True:
    if num1 % i == 0 and num2 % i == 0:
      return i
    i = i - 1

def recursion_gcd(num1, num2):
  """ a와 b의 최대공약수는 b와 a를 b로 나눈 나머지의 최대 공약수와 같다."""
  """ gcd(a, b) == gcd(b, a % b) """
  """ 어떤 수와 0의 최대공약수는 자기 자신이다. gcd(n, 0) = n """
  if num2 == 0:
    return num1

  return recursion_gcd(num2, num1 % num2)
    

class TestMeasure():
  def test_measure(self):
    expected = [1, 2, 3, 6] 
    actual = measure(6)
    assert expected == actual

  def test_common_factor(self):
    expected = [1, 2, 3, 6] 
    actual = common_factor(12, 18)
    assert expected == actual

  def test_gcd(self):
    expected = 12 
    actual = gcd(60, 24)
    assert expected == actual 

  def test_book_gcd(self):
    expected = 12 
    actual = book_gcd(60, 24)
    assert expected == actual

  def test_recursion(self):
    expected = 12 
    actual = recursion_gcd(60, 24)
    assert expected == actual