{
  /**---------------------------interface------------------------------------ */

  interface User {
    name: string;
    age: number;
  }

  /**we have to add extends keywords with interface to add extra properties  */
  interface UserWithRole2 extends User {
    role: string;
  }

  const user: UserWithRole2 = {
    name: "Rakib",
    age: 23,
    role: "employee",
  };

  //type alias vs interface
  /**we can't use primitive data type on interface but with type alias we can. */
  type rollNumber = number;
  /**We can intersect properties with type alias */
  type User2 = {
    name: string;
    age: number;
  };

  type UserWithRole = User2 & { role: string };

  const user2: UserWithRole = {
    name: "Sakib",
    age: 25,
    role: "manager",
  };

  /**Use of interface with array */

  interface Number {
    [index: number]: number;
  }

  const number: Number = [1, 2, 3];

  /**Use of interface with function */

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;
}
