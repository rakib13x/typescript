{
  /**------------------------Union types-------------------------- */

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "Rakib",
    gender: "male",
    bloodGroup: "B+",
  };

  /**------------------------Intersection types-------------------------- */
  type FrontEndDeveloper = {
    skills: string[];
    designation1: "FrontEndDeveloper";
  };
  type BackEndDeveloper = {
    skills: string[];
    designation2: "BackEndDeveloper";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["html", "css", "js"],
    designation1: "FrontEndDeveloper",
    designation2: "BackEndDeveloper",
  };
}
