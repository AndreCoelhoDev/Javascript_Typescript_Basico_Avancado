class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`A pessoa ${this.nome} está falando!`);
    }
};

const p1 = new Pessoa('André', 'Coelho');
console.log(p1);
console.log(p1.nome);

const p2 = new Pessoa('Maria', 'Oliveira');

p1.falar();
p2.falar();
