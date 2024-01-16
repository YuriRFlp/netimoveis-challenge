import { numberToMoney } from "./formatter";

test('it should convert a number to money format', () => {
  const number = 1500;

  expect(numberToMoney(number).includes("R$")).toBeTruthy();
})