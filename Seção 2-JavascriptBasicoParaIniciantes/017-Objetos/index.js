const pessoa = {
    nome: 'André',
    sobrenome: 'Coelho',
    idade: 51,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

console.log(pessoa);
console.log(pessoa.nome);
pessoa.fala();
pessoa.incrementaIdade();
console.log(pessoa.idade);

function criarPessoa(nome, sobrenome, idade)
{
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa('Adriana','Righetto',42);
console.log(pessoa1.nome);