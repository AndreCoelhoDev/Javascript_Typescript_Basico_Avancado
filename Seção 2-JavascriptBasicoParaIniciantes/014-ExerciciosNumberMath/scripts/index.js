const numero = Number(prompt('Digite um Número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu Número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para Baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para Cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
