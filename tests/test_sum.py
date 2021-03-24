
def sum(n):
    s = 0
    for i in range(1, n + 1):
        s = s + i
    return s

def sum2(n):
    return n * (n + 1) / 2

def test_sum():
    expected = 5050 
    actual = sum(100)
    assert expected == actual 

def test_sum2():
    expected = 5050 
    actual = sum2(100)
    assert expected == actual 