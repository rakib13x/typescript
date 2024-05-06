{
  class Animal {
    // name: string;
    // species: string;
    // sound: string;
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("german shepard", "dog", "Ghew ghew");
  const cat = new Animal("Persian", "cat", "meow meow");
  cat.makeSound();
}
