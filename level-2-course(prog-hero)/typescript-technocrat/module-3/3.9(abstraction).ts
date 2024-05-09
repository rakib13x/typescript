{
  /**abstraction: interface */
  //idea
  interface Vehicle1 {
    // name: string;
    // model: string;
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: "20000",
  //   };
  //real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(" I am starting the car.");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine.");
    }
    move(): void {
      console.log("I am moving the car.");
    }
  }

  const toyotaCar = new Car();
  console.log(toyotaCar.startEngine());

  /**Abstract class */

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class Toyota extends Vehicle2 {
    startEngine(): void {
      console.log(" I am starting the car.");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine.");
    }
    move(): void {
      console.log("I am moving the car.");
    }
  }

  const hondaCar = new Toyota();
}
