function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.sobrenome} - Sou um método.`);
    };

}

const p1 = new Pessoa('André','Coelho');
const p2 = new Pessoa('Maria','Oliveira');

console.log(p1.nome);
console.log(p2.sobrenome);
p1.metodo();
