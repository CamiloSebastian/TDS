const getAdvice = require("./irrigationRule");

test("temperatura 35 → irrigação urgente", () => {
  expect(getAdvice(35)).toBe("Irrigação URGENTE");
});

test("temperatura 25 → irrigação moderada", () => {
  expect(getAdvice(25)).toBe("Irrigação moderada");
});

test("temperatura 10 → não irrigar", () => {
  expect(getAdvice(10)).toBe("Não irrigar");
});