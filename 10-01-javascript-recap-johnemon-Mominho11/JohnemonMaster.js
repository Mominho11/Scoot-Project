const Johnemon = require("./Johnemon");

class JohnemonMaster {
  constructor(name) {
    this.name = name;
    this.johnemonCollection = [];
    this.healingItems = 5; // Initial number of healing items
    this.reviveItems = 3; // Initial number of revive items
    this.JOHNEBALLS = 10; // Initial number of JOHNEBALLS
  }


  healJohnemon(johnemon) {
    if (this.healingItems > 0){
      if (johnemon.healthPool < johnemon.maxHealth){
      johnemon.healthPool = johnemon.maxHealth;
      this.healingItems -= 1;
      }
      else {
      console.log(`This ${johnemon.name} doesn't need potion.`)
      }
    }
    else {
      console.log("Healing Items not available.")
    }
  }

  reviveJohnemon(johnemon) {
    if (this.reviveItems > 0){
      if (johnemon.healthPool == 0){
      johnemon.healthPool = johnemon.maxHealth;
      this.reviveItems -= 1;
      }
      else {
      console.log(`This ${johnemon.name} doesn't need a revive.`)
      }
    }
    else {
      console.log("Reviving items not available.")
    }
  }

  catchJohnemon(johnemon){
    if (this.JOHNEBALLS > 0){
    this.johnemonCollection = this.johnemonCollection.push(johnemon);
    this.JOHNEBALLS -= 1;
    }
    else {
      console.log("No JOHNEBALLS in your inventory.")
    }
  }


  releaseJohnemon(johnemon) {
    if (this.johnemonCollection.length > 0) {
      const index = this.johnemonCollection.indexOf(johnemon);
      if (index !== -1) {
        this.johnemonCollection.splice(index -1, 1); // Supprime l'élément à l'index trouvé
        console.log(`${johnemon.name} has been released.`);
      } else {
        console.log(`${johnemon.name} is not in your collection.`);
      }
    } else {
      console.log("You didn't catch any Johnemon.");
    }
  }

  showCollection() {
    console.log(this.johnemonCollection);
  }
}

module.exports = JohnemonMaster
