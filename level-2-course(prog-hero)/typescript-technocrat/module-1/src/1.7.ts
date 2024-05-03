{
  /* ------------------Spread Operator -------------------*/

  const persons1: string[] = ["Rakib", "Sakib", "Asif"];
  const persons2: string[] = ["Tanbir", "Joshim", "Tanmoy"];

  persons1.push(...persons2);
  console.log(persons1);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };
  console.log(mentorsList);
  /* ------------------Rest Operator ---------------------*/

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Kabul", "babul");
  /* ------------------ Object Destructuring --------------------*/
  const user = {
    id: 345,
    name: {
      firstName: "Rakib",
      lastName: "Islam",
    },
    contactNo: 123,
    address: "Bangladesh",
  };

  const {
    contactNo,
    name: { lastName: lName },
  } = user;
  console.log(contactNo, lName);

  /* ------------------Array Destructuring --------------------*/
  const myFriends = ["Chandler", "Joey", "ross", "rachel", "monica"];

  const [, , bestFriends, ...rest] = myFriends;
  console.log(bestFriends, rest);
}
