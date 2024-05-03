{
  /* ------------------Type Alias --------------------*/

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  };
  const student1: Student = {
    name: "Rakib Islam",
    age: 24,
    gender: "male",
    contactNumber: "01973984494",
    address: "BrahmanBaria",
  };

  const student2: Student = {
    name: "Sakib",
    age: 14,
    gender: "male",
    address: "BrahmanBaria",
  };
  const student3: Student = {
    name: "Akib",
    age: 13,
    gender: "male",
    address: "BrahmanBaria",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Rakib";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
