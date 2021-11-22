const numeros = [10,20,44,12,5,6,13,3,88,90,2];

const result = numeros.filter(valor => valor % 2 === 0)   // Somente os pares
                      .map(valor => valor * 2)            // Multiplicado por 2
                      .reduce((ac, valor) => ac + valor); // Soma Total
console.log(result);
