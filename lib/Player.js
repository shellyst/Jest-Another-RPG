const Potion = require("../lib/Potion");

//Name parameter sets a default empty string if no name is provided (ES6)
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.round() * 5 + 7);
  this.agility = Math.floor(Math.round() * 5 + 7);
  this.inventory = [new Potion("health"), new Potion()];
}

module.exports = Player;
