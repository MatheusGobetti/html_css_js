// Reduce -> Reduz o array para um resultado final

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Traz a soma dos números pares
const total = numeros.reduce((acumulador, valor) => {
  valor % 2 === 0 ? acumulador += valor : false;
  return acumulador;
}, 0);

console.log(total);
console.log('\n');

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Matheus', idade: 20 },
  { nome: 'Rafael', idade: 35 },
  { nome: 'Juliano', idade: 45 },
  { nome: 'Fabrício', idade: 32 },
  { nome: 'Ester', idade: 62 },
  { nome: 'Marcos', idade: 64 },
  { nome: 'Eunice', idade: 68 },
  { nome: 'Sara', idade: 13 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(pessoaMaisVelha);