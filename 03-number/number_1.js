console.log(new Number(10)); // Decimal
console.log(new Number(9.9)); // Float
console.log(new Number(0xff)); // Hexadecimal
console.log(new Number(0b10)); // Binario
console.log(new Number(0o10)); // Octal

// Scientifc Notation
console.log(new Number(123.4).toExponential(10));
console.log(new Number(1234.5).toExponential(10));

console.log(new Number(123.4).toFixed(10));

console.log(new Number(123.4).toPrecision(10));
