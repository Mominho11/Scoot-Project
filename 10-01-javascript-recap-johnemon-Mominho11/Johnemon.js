const students = [
  'Oli','via',
  'No','ra',
  'Dia','na',
  'Mo','hab',
  'Ly','ne',
  'Ja','son',
  'Seb','astien',
  'Cri','stelle',
  'Fa','rid',
  'Ju','lien',
  'Edou','ard',
  'Mbo','gle',
  'Ben','jamin',
  'Mat','teo',
  'Re','da',
  'Dona','tien',
  'Re','naud',
  'Ant','oine',
  'Nahi','mana',
  'Ste','phen',
  'Moha','med',
  'Ha','kim',
  'Pie','rre',
  'Hu','go',
  'Th','eo',
  'Max','ime',
]

class Johnemon {
  constructor() {
    this.name = this.generateRandomName();
    this.level = 1;
    this.experienceMeter = 0;
    this.attackRange = this.getRandomNumber(1, 8);
    this.defenseRange = this.getRandomNumber(1, 3);
    this.healthPool = this.getRandomNumber(10, 30);
    this.maxHealth = this.healthPool;
    this.catchPhrase = this.generateCatchPhrase();
  }

  generateRandomName() {
    const halfname1 = students[Math.floor(Math.random() * students.length)];
    const halfname2 = students[Math.floor(Math.random() * students.length)];
    return (`${halfname1}${halfname2}`);
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateCatchPhrase() {
    const phrases = [`You got me!`];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  attack(defender) {
    const damage = this.getRandomNumber(this.attackRange * this.level, this.attackRange) - defender.defenseRange;
    defender.healthPool -= damage;
    console.log(`${this.name} attacked ${defender.name} and dealt ${damage} damage!`);
  }

  gainExperience(opponentLevel) {
    const experienceGain = this.getRandomNumber(1, 5) * opponentLevel;
    this.experienceMeter += experienceGain;
    console.log(`${this.name} gained ${experienceGain} experience points!`);
    if (this.experienceMeter >= this.level * 100) {
      this.evolve();
    }
  }

  evolve() {
    this.level += 1;
    const attackUP = this.getRandomNumber(1, 5);
    const defenseUP = this.getRandomNumber(1, 5);
    const healthUP = this.getRandomNumber(1, 5);

    this.attackRange += attackUP;
    this.defenseRange += defenseUP;
    this.healthPool += healthUP;

    console.log(`OMG !! ${this.name} just evolved ! New stats: Level : ${this.level}, Attack Range : ${this.attackRange}, Defense Range: ${this.defenseRange}, Health Pool : ${this.healthPool}`);
  }

  sayCatchPhrase() {
    console.log(`${this.name} says: "${this.catchPhrase}"`);
  }
}



module.exports = Johnemon
