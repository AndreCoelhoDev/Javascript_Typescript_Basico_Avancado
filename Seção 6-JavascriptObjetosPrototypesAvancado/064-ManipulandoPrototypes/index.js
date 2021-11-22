const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * valor / 100);
};

const p1 = new Produto('Camiseta', 50);
console.log(p1);
p1.desconto(20);
console.log(p1);