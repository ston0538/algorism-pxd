describe("sum test", () => {
  test("sum", () => {
    function sum(n) {
      let result = 0;
      for (let index = 0; index <= n; index++) {
        result = result + index;
      }
      return result;
    }
    expect(sum(10)).toBe(55);
  });
});
