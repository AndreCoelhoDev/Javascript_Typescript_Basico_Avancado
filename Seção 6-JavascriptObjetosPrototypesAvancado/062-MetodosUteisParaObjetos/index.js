const produto = {
    nome: 'Caneca',
    preco: 1.8
}

const outroProduto = Object.assign({}, produto); // Fazendo uma cópia do objeto;
outroProduto.nome = 'Copo';

console.log(produto);
console.log(outroProduto);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
Object.defineProperty(produto, 'nome', {
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto));
