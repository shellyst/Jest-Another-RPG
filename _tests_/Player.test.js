const Player = require("../lib/Player");

const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

console.log(new Potion());

//Want players to have a name and three number properties: health, strength, agility
//Test that checks for existence of those things:
test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
