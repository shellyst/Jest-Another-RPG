//constructor functionfor a health potion
//take in name parameterand assign the value property to be a random number between 7 and 12
// if potion is a heealth pootion, value is number between 30 and 40


//Replaced function keyword with Class
//Moved name parameter into a nested constructor() method
class Potion {
  constructor(name) {
    this.types = ["strength", "agility", "health"];
    this.name =
      name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === "health") {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}
module.exports = Potion;
