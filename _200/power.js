function myPowerFn(p) {
  return function(n) {
    return Math.pow(p, n);
  }
}

var n = myPowerFn(3);
console.log(n(2)); // output: 9  (3^2)
