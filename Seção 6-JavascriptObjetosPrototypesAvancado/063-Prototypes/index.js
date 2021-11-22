function pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new pessoa('André', 'Coelho');
const pessoa2 = new pessoa('Maria', 'Oliveira');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.nomeCompleto());