/*
  Retornar Valores Falsos

  false
  0
  '' 
  "" 
  ``
  null
  undefined
  NaN
*/
console.log('Luiz' && 'Maria')
console.log('Luiz' && undefined && 'Maria')

const a = 0;
const b = null;
const c = false;
const d = 'false'; // essa
const e = NaN;

console.log(a || b || c || d || e);