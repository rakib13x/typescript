{
  /**-----------------------------ternary operator------------------------*/

  const age: number = 22;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not Adult";
  console.log(isAdult);

  /**------------------nullish coalescing operator------------------------*/
  //null or undefined --> decision making

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "guest";
  console.log(result1);

  /**-------------------Optional Chaining------------------------*/

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Rakib",
    address: {
      city: "ctg",
      road: "awesome road",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log(permanentAddress);
}
