const data = new Date();
console.log(data.toString());

const data1 = new Date(2021, 3, 21, 13, 22, 34); //a, m, d, h, m, s, ms
console.log(data1.toString());

const data2 = new Date('2019-05-20 20:19:22');
console.log(data2.toString());

console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1); // Mês começa do zero
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minuto', data2.getMinutes());
console.log('Segundo', data2.getSeconds());
console.log('Milésimo', data2.getMilliseconds());
console.log('Dia Semana', data2.getDay()); // 0 - Domingo, 6 - Sábado

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const sec = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);