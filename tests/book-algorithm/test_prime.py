def is_prime(number):
    if number <= 1:
        return False
    if number == 2:
        return True
    for i in range(2, number):
        if number % i == 0:
            return False
    return True


def test_prime():
    expected = True
    actual = is_prime(3)
    assert expected == actual
