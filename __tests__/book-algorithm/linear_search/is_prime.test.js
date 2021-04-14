describe("소수를 판별하는 함수", () => {
  function is_prime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  test("is_prime", () => {
    expect(is_prime(29)).toBe(true);
  });
});
