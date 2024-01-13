//Example:1---------------

const convertToArray = <T>(input: T): T[] => {
  return [input];
};

convertToArray("hello");

//Example:2---------------
const getIndexOfArrayItem = <T>(array: T[], arrayItem: T) => {
  return array.findIndex((item) => item === arrayItem);
};
const arr = [23, 54, 76];
const getArrayIndex = getIndexOfArrayItem(arr, 700);
console.log(getArrayIndex);
//Example:3-----
const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
  return [input1, input2];
};

createArrayPair("Hello", false);
