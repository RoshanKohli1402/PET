class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 50;      // 0 = full, 100 = starving
    this.happiness = 50;   // 0 = sad, 100 = very happy
  }

  feed() {
    this.hunger = Math.max(0, this.hunger - 20);
    this.happiness = Math.min(100, this.happiness + 5);
  }

  play() {
    this.happiness = Math.min(100, this.happiness + 20);
    this.hunger = Math.min(100, this.hunger + 10);
  }

  getStatus() {
    return `
    Pet Name: ${this.name}
    Hunger Level: ${this.hunger}
    Happiness Level: ${this.happiness}
    `;
  }
}
