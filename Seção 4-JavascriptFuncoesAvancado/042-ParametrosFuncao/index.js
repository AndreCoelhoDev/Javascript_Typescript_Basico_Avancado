function funcao() {
    console.log('oi');
    console.log(arguments[0]);
}

funcao('Valor');

function numeros(a, b, c, d) {
    console.log(a, b, c, d);
}

numeros(1, 3);

function soma(a, b=0, c=0) {
    console.log(a + b + c);
}

soma(1);

function conta(operador, acumulador, numeros){
    console.log(operador, acumulador, numeros);

    for (const numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1, [10,20,30]);


