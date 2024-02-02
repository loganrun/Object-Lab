//Humble beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },

    roll (mod = 0){
        const result = Math.floor(Math.random() * 20) +1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
    }
    
    adventurer.roll();

//Class Fantasy

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }