function* geradora1(){
    //Código qualquer ...
    yield 'Valor 1';
    //Código qualquer ...
    yield 'Valor 2';
    //Código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

const g2 = geradora1();
for (const valor of g2) {
    console.log(valor);
}

function* geradora2() {
    let i=0;

    while(true){
        yield i;
        i++;
    }
}

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (const valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function (){
        console.log('Vim do yield 1');
    }
    //
    //
    yield function (){
        console.log('Vim do yield 2');
    }
}

const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();
