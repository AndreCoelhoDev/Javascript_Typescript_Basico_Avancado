let num1 = 1500;
let num2 = 2.5;
let num3 = 10.1563575795;

console.log(num1 + num2);
console.log(num1.toString() + num2);
console.log(num3.toFixed(2));
console.log(Number.isInteger(num2));

let temp = num1 * 'oi';
console.log(temp);
console.log(Number.isNaN(temp));

//Precisao
let num4 = 0.7;
let num5 = 0.1;
console.log(num4 + num5);
console.log(Number((num4 + num5).toFixed(2)));

//Infinity
console.log(100 / 0);


