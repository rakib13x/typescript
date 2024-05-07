{
  //**-------------------------------type guard -------------------------------*/

  type Alphaneumeric = string | number;
  const add = (
    param1: string | number,
    param2: string | number
  ): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(2, 3);
  console.log(res1);
  const res2 = add(2, "2");
  console.log(res2);

  //**--in guard */

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name} and I don't have any role.`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
  };

  const admin = getUser(adminUser);
  const user1 = getUser(normalUser);
}
