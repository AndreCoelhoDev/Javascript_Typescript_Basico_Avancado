const numeros = [10,20,44,12,5,6,13,3,88,90,2];

const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
console.log(pessoas);

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

const idades = pessoas.map(valor => ({idade: valor.idade}));
console.log(idades);

const ids = pessoas.map((valor, indice) => {
    valor.id = indice + 1;
    return valor;
});
console.log(ids);