const nomes = ['André', 'Ricardo', 'Coelho', 'Maria', 'Carlos'];

//nomes.splice(indice, delete, elem1, elem2, elem3, ...)

//Pop
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

const removidos2 = nomes.splice(2, 1, 'Luiz');
console.log(nomes, removidos2);


