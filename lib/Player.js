const Potion = require("../lib/Potion");
const Character = require("./Character");

//Name parameter sets a default empty string if no name is provided (ES6)
//Will create a getStats and getInventory on every player
class Player extends Character {
  constructor(name = "") {
    //call parent constructor here
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

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
  }
}

module.exports = Player;
