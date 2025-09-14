let calculator = {
    absoluteValue(num) {
        return console.log(`The absolute value of ${num} is ${Math.abs(num)}.`)
    },
    power(base, exponent){ // revised for clarity
        return console.log(`${base} to the power of ${exponent} is ${Math.pow(base, exponent)}.`)
    },
    squareRoot(num) {
        return console.log(`The square root of ${num} is ${Math.pow(num, 0.5)}.`)
    },
    smallToBig(arr) {
        return console.log(`The smallest and largest numbers in ${arr} are ${[Math.min(...arr), Math.max(...arr)]}.`)
    },
    randomNum(min, max) { // revised to add minimum to the range
        return console.log(`One example of a random number between ${min} and ${max} is ${Math.floor((Math.random() * (max - min + 1)) + min)}.`)
    },
    round(decimal, place) { // revised to add custom decimal placement
        return console.log(`${decimal} rounded to ${place} decimal places is ${Math.round(decimal * (10 ** place)) / (10 ** place)}.`)
    },
};

// Test

calculator.absoluteValue(-45.67); // 45.67
calculator.power(5, 3); // 125
calculator.squareRoot(144); // 12
calculator.smallToBig([3, 78, -12, 0.5, 27]); // [ -12, 78 ]
calculator.randomNum(1, 50); // 1-50
calculator.round(23.67891, 2); // 23.68