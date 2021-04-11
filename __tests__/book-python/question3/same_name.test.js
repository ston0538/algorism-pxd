describe("find same name", () => {
  function findSameName(names) {
    const result = new Set();
    for (let i = 1; i < names.length - 1; i++) {
      for (let j = i + 1; j < names.length; j++) {
        if (names[i] === names[j]) result.add(names[i]);
      }
    }
    return result;
  }
  test("같은 이름 집합으로 만들기", () => {
    const names = ["김현기", "김이안", "신수연", "김이안", "신수연"];
    const expected = findSameName(names);
    const actualName = ["김이안", "신수연"];
    const actual = new Set(actualName);
    expect(expected).toMatchObject(actual);
  });
});
