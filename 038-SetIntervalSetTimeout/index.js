function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoInterval() {
  console.log(mostraHora());
}

const timer = setInterval(funcaoInterval, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 5000);