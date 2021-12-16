const Potion = require("../lib/Potion");

//'new' creates new potion objects
//assuming when e create new potion, it takes string in and assign it to potion's name
//Specify it should have a name property equal to health and a value that is a number
test("creates a health potion object", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});
//expect any takes a constructor as an argument

test("creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
