describe("재귀", () => {
  // https://ko.javascript.info/recursion#ref-1360

  test("모든 부서의 급여 합을 구하기", () => {
    const company = {
      sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 1600 },
      ],
      development: {
        sites: [
          { name: "Peter", salary: 2000 },
          { name: "Alex", salary: 1800 },
        ],
        internals: [{ name: "Jack", salary: 1300 }],
      },
    };
    expect(notRecursion(company)).toBe(7700);
    expect(recursion(company)).toBe(7700);
  });
});
function notRecursion(department) {
  let result = 0;
  department.sales.forEach((s) => (result = result + s.salary));
  department.development.sites.forEach((s) => (result = result + s.salary));
  department.development.internals.forEach((i) => (result = result + i.salary));
  return result;
}
function recursion(department) {
  if (Array.isArray(department)) {
    return department.reduce((acc, current) => acc + current.salary, 0);
  } else {
    let result = 0;
    Object.values(department).forEach((v) => (result = result + recursion(v)));
    // for (let key of Object.values(department)) {
    //   result = result + recursion(key)
    // }
    return result;
  }
}
