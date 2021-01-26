class Calculator {
  static PI = 3.141592;
  static som(a, b) {
    return a + b;
  }
  static verschil(a, b) {
    return a - b;
  }
  static delen(a, b) {
    return a / b;
  }
  static vermenigvuldigen(a, b) {
    return a * b;
  }
}

console.log(Calculator.som(3, 3)); // Dit moet 6 loggen
console.log(Calculator.verschil(3, 2)); // Dit moet 1 loggen
console.log(Calculator.delen(6, 2)); // Dit moet 3 loggen
console.log(Calculator.vermenigvuldigen(3, 3)); // Dit moet 9 loggen
console.log(Calculator.PI); // Dit moet 3.141592 loggen
