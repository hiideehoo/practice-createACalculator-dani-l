let calculator = {
    absoluteValue(num) {
        return (Math.abs(num))
    },
    power(base, exponent){ // revised for clarity
        return (Math.pow(base, exponent))
    },
    squareRoot(num) {
        return (Math.pow(num, 0.5))
    },
    smallToBig(arr) {
        return [Math.min(...arr), Math.max(...arr)]
    },
    randomNum(min, max) { // revised to add minimum to the range
        return (Math.floor((Math.random() * (max - min + 1)) + min))
    },
    round(decimal, place) { // revised to add custom decimal placement
        return (Math.round(decimal * (10 ** place)) / (10 ** place))
    },
};

// Test

console.log(calculator.absoluteValue(-45.67)); // 45.67
console.log(calculator.power(5, 3)); // 125
console.log(calculator.squareRoot(144)); // 12
console.log(calculator.smallToBig([3, 78, -12, 0.5, 27])); // [ -12, 78 ]
console.log(calculator.randomNum(1, 50)); // 1-50
console.log(calculator.round(23.67891, 2)); // 23.68

// Revised Test (for clearer printing)

let absValue = -45.67;
console.log(`The absolute value of ${absValue} is ${calculator.absoluteValue(absValue)}.`); // 45.67

let base = 5; let exponent = 3;
console.log(`${base} to the power of ${exponent} is ${calculator.power(base, exponent)}.`); // 125

let squareRoot = 144;
console.log(`The square root of ${squareRoot} is ${calculator.squareRoot(squareRoot)}.`); // 12

let range = [3, 78, -12, 0.5, 27];
console.log(`The smallest and largest numbers in ${range} are ${calculator.smallToBig(range)}.`); // [ -12, 78 ]

let min = 1; let max = 50;
console.log(`One example of a random number between ${min} and ${max} is ${calculator.randomNum(min, max)}.`); // 1-50

let decimal = 23.67891; let placement = 2;
console.log(`${decimal} rounded to ${placement} decimal places is ${calculator.round(decimal, placement)}.`); // 23.68