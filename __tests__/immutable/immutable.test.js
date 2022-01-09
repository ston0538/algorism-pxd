// https://blog.agney.dev/immutable-array-operations/
describe("immutable", () => {
  const nums = [1, 2, 3, 4, 5];

  test("pop", () => {
    const actual = [...nums.slice(0, nums.length - 1)];
    const expected = [1, 2, 3, 4];
    expect(actual).toEqual(expected);
  });

  test("shift", () => {
    const actual = [...nums.slice(1)];
    const expected = [2, 3, 4, 5];
    expect(actual).toEqual(expected);
  });

  test("unshift", () => {
    const actual = [0, ...nums];
    const expected = [0, 1, 2, 3, 4, 5];
    expect(actual).toEqual(expected);
  });

  test("splice", () => {
    function insertNumber(index, newNumber) {
      return [...nums.slice(0, index), newNumber, ...nums.slice(index)];
    }
    // const actual = [...nums.slice(0, 2), 2.5, ...nums.slice(2)];
    const actual = insertNumber(2, 2.5);

    console.log(actual);
    const expected = [1, 2, 2.5, 3, 4, 5];
    expect(actual).toEqual(expected);
  });

  test("index에 해당하는 값만 삭제", () => {
    function deleteNumber(i) {
      return [...nums.slice(0, i), ...nums.slice(i + 1)];
    }
    const actual = deleteNumber(1);
    const expected = [1, 3, 4, 5];

    expect(actual).toEqual(expected);
  });
});
