let calculator = {
    absoluteValue(num) {
        return (Math.abs(num))
    },
    power(num, num2){
        return (Math.pow(num, num2))
    },
    square(num) {
        return (Math.pow(num, 0.5))
    },
    smallToBig(arr) {
        return [Math.min(...arr), Math.max(...arr)]
    },
    random(num) {
        return (Math.floor((Math.random() * num) + 1))
    },
    round(num) {
        return (Math.round(num * 100) / 100)
    },
};

// Test

console.log(calculator.absoluteValue(-45.67)); // 45.67
console.log(calculator.power(5, 3)); // 125
console.log(calculator.square(144)); // 12
console.log(calculator.smallToBig([3, 78, -12, 0.5, 27])); // [ -12, 78 ]
console.log(calculator.random(50)); // 1-50 // I got 31
console.log(calculator.round(23.67891)); // 23.68