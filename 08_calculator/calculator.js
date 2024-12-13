const add = function (number1, number2) {
  let result = number1 + number2;
  return result;
};

const subtract = function (number1, number2) {
  let result = number1 - number2;
  return result;
};

const sum = function (array) {
const myNumbers = array;
let total = 0;
myNumbers.forEach(element => {
  return total += element;
});
return total;
};

const multiply = function (array) {
  const myNumbers = array;
  const total = myNumbers.reduce(multiplyOfArray)
  function multiplyOfArray (accumulator, element) {
    return accumulator * element;
  }
  return total;
};

const power = function (number1, number2) {
  let result = Math.pow(number1, number2);
  return result;
};
  
const factorial = function (number) {
  if (number === 0) {
    return 1;
  };
  const myNumbers = [];
  for (i = 1; i < number + 1; i++) {
    myNumbers.unshift(i);
  }
  const total = myNumbers.reduce(multiplyOfArray)
  function multiplyOfArray (accumulator, element) {
    return accumulator * element;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
