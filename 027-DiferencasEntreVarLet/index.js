const verdadeira = true;

// Let tem escopo de bloco {....}
// Var só tem escopo de função

let nome = 'ricardo';
var nome2 = 'ricardo';

var nome2 = 'redeclarada';
console.log(nome2);

if (verdadeira) {
    let nome = 'coelho';
    var nome2 = 'redeclarada novamente';

    console.log(nome, nome2);
    var nome3 = 'Estranho'
}
console.log(nome3);
