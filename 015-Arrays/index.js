const alunos = ['Maria', 'João', 'José', 'Luiz'];
console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Joana';
console.log(alunos);

alunos[4] = 'Márcia';
console.log(alunos);

alunos[alunos.length] = 'Luana';
alunos[alunos.length] = 'André';
console.log(alunos);

alunos.push('Último');
console.log(alunos);

alunos.unshift('Primeiro');
console.log(alunos);

alunos.pop('Joana')
console.log(alunos);

const removido = alunos.pop('André')
console.log(alunos);
console.log(removido);

const removido2 = alunos.shift();
console.log(alunos);
console.log(removido2);

console.log(alunos[50]); // Undefined

console.log(alunos.slice(0, 2));

console.log(alunos instanceof Array);

console.log(alunos.length);