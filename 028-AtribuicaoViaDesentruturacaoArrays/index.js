let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(a, b, c);

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

const nums = [10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90];
const primeiroNumero = nums[0]; 
console.log(primeiroNumero);

[n1, n2, ...resto] = nums;
console.log(n1, n2);
console.log(resto);

[n1, , n3, , n5] = nums;
console.log(n1, n3, n5);

const nums2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(nums2[2][1]);

const [lista1, lista2, lista3] = nums2;
console.log(lista2[1]);
