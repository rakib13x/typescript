// type Person = {
//   name: string;
//   age: number;
// };

// // Inferred!
// // return type is { name: string, age: number }
// function createPerson() {
//   return { name: "Stefan", age: 39 };
// }

// // Inferred!
// // me: { name: string, age: number}
// const me = createPerson();

// // Annotated! You have to check if types are compatible
// function printPerson(person: Person) {
//   console.log(person.name, person.age);
// }

// // All works
// printPerson(me);

/** With a structural type system, you can create interesting patterns with carrier vari‐
ables with the type inferred, and you can reuse the same variable in different parts of
your software, with no similar connection to each other: */

type Person = {
  name: string;
  age: number;
};
type Studying = {
  semester: number;
};

type Student = {
  id: string;
  age: number;
  semester: number;
};

function createPerson() {
  return { name: "Stefan", age: 39, semester: 25, id: "XPA" };
}
function printPerson(person: Person) {
  console.log(person.name, person.age);
}
function studyForAnotherSemester(student: Studying) {
  student.semester++;
}
function isLongTimeStudent(student: Student) {
  return student.age - student.semester / 2 > 30 && student.semester > 20;
}
const me = createPerson();
// All work!
printPerson(me);
studyForAnotherSemester(me);
isLongTimeStudent(me);
