from functools import reduce

def factorial(num):
  result = 1
  for i in range(1, num + 1):
    result = result * i
  return result 

def recursion(num):
  if num <= 1: 
    return 1
  return num * recursion(num - 1)

def sum_salary(department):
  if isinstance(department, list):
    return sum(d['salary'] for d in department) 
  else:
    result = 0
    for v in department.values():
      result = result + sum_salary(v)
  return result 

class TestFactorial():
  def test_factorial(self):
    num = 5
    expected = factorial(num)
    actual = 120
    assert expected == actual 

  def test_recursion(self):
    num = 5
    expected = recursion(num)
    actual = 120
    assert expected == actual

  def test_sum_salary(self):
      company = {
        'sales': [{'name': 'John', 'salary': 1000}, {'name': 'Alice', 'salary': 1600}],
        'development': {
          'sites': [{'name': 'Peter', 'salary': 2000}, {'name': 'Alex', 'salary': 1800}],
          'internals': [{'name': 'Jack', 'salary': 1300}]
        }
      }
      excepted = sum_salary(company)
      actual = 7700
      assert excepted == actual
 

