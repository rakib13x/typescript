{
  /**----------------Constraints----------------------- */

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: "Rakib",
    email: "rakib@gmail.com",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "Sakib",
    email: "sakib@gmail.com",
    hasWatch: "Apple Watch",
  });
  console.log(student1, student2);
}
