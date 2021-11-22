function saudacao(nome) {
  return console.log(`Bom dia ${nome}!`);
}

saudacao('Coelho');

function saudacao2(nome) {
    return `Bom dia ${nome}!`;
}
  
const variavel = saudacao2('Ricardo');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3,4));

const raiz = function(n){
  return n ** 0.5;
};
console.log(raiz(9));

const raiz2 = (n) =>{
  return n ** 0.5;
};

console.log(raiz2(16));