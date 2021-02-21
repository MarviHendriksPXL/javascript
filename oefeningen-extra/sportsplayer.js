class Player {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge() {
    console.log(`${this.name} is age ${this.age}`);
  }

  getHeight() {
    console.log(`${this.name} is ${this.height} cm`);
  }

  getWeight() {
    console.log(`${this.name} weighs ${this.weight} kg`);
  }
}

player1 = new Player("Patrick Mahomes", 24, 188, 104);
player2 = new Player("Jimmy Garoppolo", 28, 188, 102);
player3 = new Player("Julio Jones", 31, 191, 100);

player1.getAge();
player1.getHeight();
player1.getWeight();
