describe("문제 5번", () => {
  test("하노이탑 n이 두개일때", () => {
    const n = 2;
    const actual = "1에서 3로 옮긴다.";
    // const expected = hanoi(n, 1, 3, 2);
    hanoi(3, 1, 3, 2);
  });
});

function hanoi(n, from, to, temp) {
  if (n === 1) return console.log(`${n}: ${from}에서 ${to}로 옮긴다.`); // 마지막 원반을 목적지로;
  hanoi(n - 1, from, temp, to); // n -1 이 1이면 이쪽 인수를 따른다.
}
