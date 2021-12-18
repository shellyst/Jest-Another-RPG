const Potion = require("../lib/Potion");

//Name parameter sets a default empty string if no name is provided (ES6)
//Will create a getStats and getInventory on every player
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];
}

Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Player.prototype.reduceHealth = function (health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Player.prototype.getAttackValue = function () {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function (potion) {
  this.inventory.push(potion);
};
//Potions are different because we'll need to handle updating Player inventory as well as stats
//When Player drinks potions, potion needs to be removed from inventory, and stats adjusted accordingly.

//Keep track of old inventory length so we can make sure the length decreases and doesn't go below zero.
Player.prototype.usePotion = function (index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case "agility":
      this.agility += potion.value;
      break;
    case "health":
      this.health += potion.value;
      break;
    case "strength":
      this.strength += potion.value;
      break;
  }
};

module.exports = Player;
