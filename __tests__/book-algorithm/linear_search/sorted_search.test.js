describe("정렬된 배열에서의 선형 검색", () => {
  function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
      if (array[i] > value) {
        return null
      }
    }
    return null
  }
  function binarySearch(array, value) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (value === array[mid]) {
        return mid
      }
      if (value > array[mid]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    return null
  }
  test("linear search-1", () => {
    const nums = [1, 2, 4, 9, 10, 22, 30];
    expect(linearSearch(nums, 10)).toBe(true);
  });
  test("linear search 결과값이 없을때", () => {
    const nums = [17, 3, 75, 202, 80];
    expect(linearSearch(nums, 10)).toBe(null);
  });
  test("binary search", () => {
    const nums = [1, 2, 4, 9, 10, 30];
    expect(binarySearch(nums, 30)).toBe(5);
  });
  test("binary search 결과값이 없을때 ", () => {
    const nums = [1, 2, 4, 9, 10, 22, 30];
    expect(binarySearch(nums, 29)).toBe(null);
  });
});
