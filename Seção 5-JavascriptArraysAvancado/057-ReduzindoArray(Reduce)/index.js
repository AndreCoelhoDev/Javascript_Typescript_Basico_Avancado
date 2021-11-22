const numeros = [10,20,44,12,5,6,13,3,88,90,2];

const total = numeros.reduce((acum, valor) => {
    return acum += valor;
}, 0);

console.log(total);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 67},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
console.log(pessoas);

const pessoaMaisVelha = pessoas.reduce((acum, valor) => {
    if(acum.idade > valor.idade) return acum;

    return valor;
});
console.log(pessoaMaisVelha);