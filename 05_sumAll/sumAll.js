const sumAll = function(number1,number2) {
    let total = number1 + number2;
    if (number1 < 0) {
        return "ERROR"
    } else if (number2 < 0) {
        return "ERROR"
    } else if (!Number.isInteger(total)) {
        return "ERROR"
    }
    let sum = 0;
    for (let i = 1; i < total; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
