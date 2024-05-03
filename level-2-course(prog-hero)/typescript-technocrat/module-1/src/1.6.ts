/* -------------Learning Function ------------------*/

//Normal Function

function add(num1: number, num2: number) {
  return num1 + num2;
}

add(2, 2);

//Arrow Function
const addArrow = (num1: number, num2: number) => num1 + num2;

//object ==> function ==> method

const poorUser = {
  name: "Rakib",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 5, 8];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArr);
