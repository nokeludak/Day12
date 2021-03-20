// Change code below this line
function sumFibonacii(num) {
  if (num == 1) {
    return 1;
  } else {
    var fib0 = 0;
    var fib1 = 1;
    var fib = 1;
    var sum = fib0;
    while (fib <= num) {
      if (fib % 2) {
        sum += fib1;
      }
      fib = fib0 + fib1;
      fib1 += fib0;
      fib0 = fib1 - fib0;
    }
  }
  return sum;
}
// Change code above this line

console.log(sumFibonacii(1));
console.log(sumFibonacii(10));
console.log(sumFibonacii(20));
console.log(sumFibonacii(4));
console.log(sumFibonacii(-5));
module.exports = sumFibonacii;
