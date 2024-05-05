{
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //Pick(picked a specific types)
  type Name = Pick<Person, "name" | "email" | "age">;

  //Omit(omit a specific types key,value)
  type ContactInfo = Omit<Person, "name" | "age">;

  //Require(make types required)
  type PersonRequired = Required<Person>;

  //Partial(make every types optional)
  type PersonPartial = Partial<Person>;

  //readOnly(make types readonly)
  type PersonReadOnly = Readonly<Person>;

  const person1: Person = {
    name: "Rakib",
    age: 24,
    contactNo: "10192391092892",
  };

  //Record(dynamically added types)
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "ada",
    b: "Bbb",
    c: "cc",
  };

  const EmptyObj: Record<string, unknown> = {};
  EmptyObj.age = 12;
  EmptyObj.name = "Rakib";
}
