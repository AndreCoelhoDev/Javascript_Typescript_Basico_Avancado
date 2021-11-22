const frutas = ['Banana', 'Uva', 'Pera'];

for (const key in frutas) {
    console.log(frutas[key]);
}

const pessoa = {
    nome: 'André',
    sobrenome: 'Coelho',
    idade: 51
}

for (const key in pessoa) {
    console.log(key, pessoa[key]);
}