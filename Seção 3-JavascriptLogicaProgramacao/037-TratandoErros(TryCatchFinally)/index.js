try {
    console.log(naoExisto);
} catch (error) {
    console.log('Não Existo');
}

function soma(x , y){
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        throw('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));    
} catch (error) {
    console.log(error);
} finally {
    console.log('sempre será executado.');
}

function retornaHora(data){
    if(!(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    return data.toLocaleTimeString('pt-BR');
}

try {
    console.log(retornaHora(10));     
} catch (error) {
    console.log(error);
}
