let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log('*********');

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(0, 50);

while (rand !== 10) {
    rand = random(0, 50);
    console.log(rand);
}

console.log('*********');

rand = 10;

do {
    rand = random(0, 50);
    console.log(rand);
} while (rand !== 10);