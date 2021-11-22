function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

    this.aumento = function(valor){
        this.preco += valor;
    };
};

Produto.prototype.desconto = function(valor){
    this.preco -= valor;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

const produto1 = new Produto('Caneca', 5.5);
const camiseta1 = new Camiseta('Regata', 15, 'Azul');

console.log(produto1);
console.log(camiseta1);
camiseta1.aumento(10);
console.log(camiseta1);