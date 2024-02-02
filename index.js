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
            inventory: ["small hat", "sunglasses"]
        }
    },

    roll (mod = 0){
        const result = Math.floor(Math.random() * 20) +1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
    }
    
    //adventurer.roll();

//Class Fantasy

class Character {
    constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = 'Flea';
robin.companion.companion.inventory = ["small hat", "sunglasses"]

// class features

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion extends Character {
    constructor (name, role) {
      super(name);
      this.role = role;
      this.inventory.push("sword", "potion", "artifact");
    }
  }

  class Robin extends Adventurer{
    constructor (name, role) {
      super(name, role);
    }
  }
  
  class Leo extends Companion{
    constructor (name, role) {
      super(name, role);
    }
  }
  
  class Frank extends Companion{
    constructor (name, role) {
      super(name, role);
    }
  }