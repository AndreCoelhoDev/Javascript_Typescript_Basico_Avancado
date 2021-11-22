function produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: false, // Pode alterar
        configurable: false //Configurável e não pode apagar
    });
};

const p1 = new produto('Camiseta', 35, 3);
p1.estoque = 40;
delete p1.estoque;
console.log(p1);