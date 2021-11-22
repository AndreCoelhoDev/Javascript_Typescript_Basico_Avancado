const numeros = [10,20,44,12,5,6,13,3,88,90,2];

function callbackFilter(valor, indice, array){
    /*
    if (valor >= 10) {
        return true
    } else {
        return false
    }
    */
   return valor >= 10;
}

//const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados = numeros.filter(valor => valor >= 10);
console.log(numerosFiltrados);

const nomes = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
console.log(nomes);

const pessoasNomeGrande = nomes.filter(valor => valor.nome.length > 6);
console.log(pessoasNomeGrande);

const pessoasMais50anos = nomes.filter(valor => valor.idade > 50);
console.log(pessoasMais50anos);

const pessoasTerminamComA = nomes.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminamComA);