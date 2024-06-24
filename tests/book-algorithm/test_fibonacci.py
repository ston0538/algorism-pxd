# __fibo_cache = {}


# def fibonacci(n):
#     if n in __fibo_cache:
#         return __fibo_cache[n]
#     else:
#         __fibo_cache[n] = n if n < 2 else fibonacci(n-2) + fibonacci(n-1)
#         return __fibo_cache[n]

fibo_cache = {}


def fibonacci(number):
    if number in fibo_cache:
        return fibo_cache[number]
    if number <= 2:
        return 1
    fibo_cache[number] = fibonacci(number - 1) + fibonacci(number - 2)
    return fibo_cache[number]


def test_fibonacci():
    expected = 55
    actual = fibonacci(10)
    assert expected == actual
