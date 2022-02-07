function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Caiu no ERRO');
      return;
    }

    setTimeout(() => {
      resolve(msg);
      return;
    }, tempo);
  });
}

const promises = [
  'Primeiro Valor',
  esperaAi('Promise 1', 1000),
  esperaAi('Promise 2', 3500),
  esperaAi('Promise 3', 1000),
  2 + 2
];

Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  });