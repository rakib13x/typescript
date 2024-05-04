{
  /**---------------------------generics------------------------------------ */

  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [3, 4, 5, 6, 7];

  const mentors: GenericArray<string> = ["Rakib", "Sakib"];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Rakib",
      age: 29,
    },
    {
      name: "Sakib",
      age: 22,
    },
  ];

  /**-----------------Generic  tuple---------------*/

  type GenericTuple<X, Y> = [X, Y];
  const man: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  interface User {
    name: string;
    email: string;
  }

  const UserWithID: GenericTuple<number, User> = [
    1234,
    { name: "rakib", email: "rakib@gmail.com" },
  ];
}
