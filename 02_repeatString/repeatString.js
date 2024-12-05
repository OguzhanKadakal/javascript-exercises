const repeatString = function(word, times) {
    let string = "";
    for (i = 0; i < times; i++) {
        string += word;
    }
    if ( times < 0) {
        return "ERROR"
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
