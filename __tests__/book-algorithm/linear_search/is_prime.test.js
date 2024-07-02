describe("소수를 판별하는 함수", () => {
  function is_prime(number) {
    if (number <= 1) return false
    if (number === 2) return true
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  test("is_prime", () => {
    expect(is_prime(2)).toBe(true);
  });
});
