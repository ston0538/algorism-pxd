describe("2장 최대값을 찾아라", () => {
  test("주어진 리스트에서 최대값을 찾아라1", () => {
    const numbers = [17, 92, 18, 33, 58, 7, 33, 42];
    const result = Math.max(...numbers);
    expect(result).toBe(92);
  });
  test("주어진 리스트에서 최대값을 찾아라2", () => {
    function findMaxNumber(list) {
      let max = 0;
      list.forEach((i) => {
        if (i > max) max = i;
      });
      return max;
    }
    const numbers = [17, 92, 18, 33, 58, 7, 33, 42];
    expect(findMaxNumber(numbers)).toBe(92);
  });
  test("주어진 리스트에서 최대값의 위치를 찾아라", () => {
    function findMaxLocation(list) {
      let maxIndex = 0;
      list.forEach((l, i, o) => {
        if (o[i] > o[maxIndex]) maxIndex = i;
      });
      return maxIndex;
    }
    const numbers = [17, 18, 92, 33, 58, 7, 33, 42];
    expect(findMaxLocation(numbers)).toBe(2);
  });
});
