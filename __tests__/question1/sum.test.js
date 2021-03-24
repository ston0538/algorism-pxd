describe("1장 1부터 n까지의 합", () => {
  test("1부터 n까지의 합", () => {
    function sum(n) {
      let result = 0;
      for (let index = 0; index <= n; index++) {
        result = result + index;
      }
      return result;
    }
    expect(sum(10)).toBe(55);
  });
  test("1부터 n까지의 합2", () => {
    function sum(n) {
      const result = (n * (n + 1)) / 2;
      return result;
    }
    expect(sum(10)).toBe(55);
  });
  test("1부터 n까지의 제곱의 합", () => {
    function squared(n) {
      let result = 0;
      for (let index = 0; index <= n; index++) {
        result = result + Math.pow(index, 2);
      }
      return result;
    }
    expect(squared(10)).toBe(385);
  });
  test("1부터 n까지의 제곱의 합2", () => {
    function squared(n) {
      const result = (n * (n + 1) * (2 * n + 1)) / 6;
      return result;
    }
    expect(squared(10)).toBe(385);
  });
});
