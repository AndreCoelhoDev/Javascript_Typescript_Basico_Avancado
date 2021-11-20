const pessoa = {
    nome: 'André',
    sobrenome: 'Coelho',
    idade: 51,
    endereco: {
        rua: 'Adolfo',
        numero: 367
    }
};

const nome0 = pessoa.nome;
console.log(nome0);

// Atribuiçao via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

const { nome: teste, sobrenome: teste2 } = pessoa;
console.log(teste2, teste);

const { endereco } = pessoa;
console.log(endereco);

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

const { nome: n, ...resto} = pessoa;
console.log(n, resto);
