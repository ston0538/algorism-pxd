describe("정렬된 배열에서의 선형 검색", () => {
  function linearSearch(array, value) {
    return array.some((e) => e === value);
  }
  function binarySearch(array, value) {
    let lower = 0;
    let upper = array.length - 1;
    while (lower <= upper) {
      let mid = Math.ceil((lower + upper) / 2);
      if (value === array[mid]) {
        return mid;
      } else if (value > array[mid]) {
        lower = mid + 1;
      } else if (value < array[mid]) {
        upper = mid - 1;
      }
    }
  }
  test("linear search", () => {
    const nums = [1, 2, 4, 9, 10, 22, 30];
    expect(linearSearch(nums, 10)).toBe(true);
  });
  test("binary search ", () => {
    const nums = [1, 2, 4, 9, 10, 22, 30];
    expect(binarySearch(nums, 30)).toBe(6);
  });
});
