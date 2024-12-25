const fibonacci = function(n) {
    let fib = Number(n);
    if (fib < 0) {
        return "OOPS";
    } else if (fib === 0) {
        return 0;
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i<= fib; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
