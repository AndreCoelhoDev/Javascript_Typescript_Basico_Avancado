function retornaFuncao(){
    const nome = 'Coelho';

    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao());

function retornaFuncao2(nome){
    return function(){
        return nome;
    }
}

const funcao2 = retornaFuncao2('André');
const funcao3 = retornaFuncao2('Coelho');
console.log(funcao2());
console.log(funcao3());

