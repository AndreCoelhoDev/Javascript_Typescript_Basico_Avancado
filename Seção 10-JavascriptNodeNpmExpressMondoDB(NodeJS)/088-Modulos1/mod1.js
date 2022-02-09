const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
  console.log(nome, sobrenome);
}

/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);
*/

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//console.log(exports);

/*
this.nome = nome;
this.sobrenome = sobrenome;
this.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);
*/