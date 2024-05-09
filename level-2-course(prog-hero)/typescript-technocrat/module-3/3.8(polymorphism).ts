{
  /**oop has 4 parts:
   * 1.inheritance
   * 2.polymorphism
   * 3.Abstraction
   * 4.Enscapsulation
   */
  class Person {
    getSleep() {
      return "I am sleeping for 8 hours per day.";
    }
  }

  class Student extends Person {
    getSleep() {
      return "I am sleeping for 7 hours a day.";
    }
  }

  class Developer extends Person {
    getSleep() {
      return "I am sleeping for 6 hours a day.";
    }
  }

  const getSleepingHours = (param: Person) => {
    return param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  console.log(getSleepingHours(person1));
  console.log(getSleepingHours(person2));
  console.log(getSleepingHours(person3));

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    return param.getArea();
  };

  const shape1 = new Shape();
  console.log(shape1);
  const shape2 = new Circle(10);
  console.log(getShapeArea(shape2));
  const shape3 = new Rectangle(20, 30);
  console.log(getShapeArea(shape3));
}
