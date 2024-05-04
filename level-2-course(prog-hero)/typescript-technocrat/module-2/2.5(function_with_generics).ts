{
  /**---------------------------Function with generics--------------------------*/
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArrayWithGeneric("Bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 123,
    name: "Rakib",
  });
  console.log(res1);
  console.log(resGenericObj);
  const createArrayWithTuple = <T, K>(param1: T, param2: K): [T, K] => {
    return [param1, param2];
  };

  const resGenericTuple = createArrayWithTuple<string, number>("Rakib", 123);

  console.log(resGenericTuple);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Rakib",
    email: "rakib@gmail.com",
  });
  const student2 = addCourseToStudent({
    name: "Sakib",
    email: "sakib@gmail.com",
    hasWatch: "Apple Watch",
  });
  console.log(student1, student2);
}
