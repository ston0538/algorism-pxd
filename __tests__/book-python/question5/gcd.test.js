describe("최대 공약수 구하기", () => {
  test("약수 구하기", () => {
    const expected = [1, 2, 3, 6];
    expect(measure(6)).toEqual(expected);
  });
  test("공약수 구하기", () => {
    const expected = [1, 2, 3, 6];
    expect(commonFactor(12, 18)).toEqual(expected);
  });

  test("최대 공약수 구하기", () => {
    const expected = 6;
    expect(gcd(12, 18)).toEqual(expected);
  });

  test("최대 공약수 구하기 - 책 설명 방식", () => {
    const expected = 6;
    expect(bookGcd(12, 18)).toEqual(expected);
  });
  test("최대 공약수 구하기 - 재귀 이용", () => {
    const expected = 12;
    expect(recursionGcd(60, 24)).toEqual(expected);
  });
});

function measure(number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) result.push(i);
  }
  return result;
}

function commonFactor(num1, num2) {
  const result = [];
  measure(num1).forEach((m1) => {
    measure(num2).forEach((m2) => {
      if (m1 === m2) result.push(m1);
    });
  });
  return result;
}

function gcd(num1, num2) {
  const cf = commonFactor(num1, num2);
  return Math.max(...cf);
}

function bookGcd(num1, num2) {
  let minNum = Math.min(num1, num2);
  while (true) {
    if (num1 % minNum === 0 && num2 % minNum === 0) return minNum;
    minNum = minNum - 1;
  }
}

function recursionGcd(num1, num2) {
  if (num2 === 0) return num1;
  return recursionGcd(num2, num1 % num2);
}
