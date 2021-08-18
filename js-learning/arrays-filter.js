// Filter -> Sempre retorna um array com a mesma qtd de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter(valor => valor > 10); // Isto é uma função de callback completa em tamanho reduzido!! :)
console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'

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

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasMaisVelhas = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasMaisVelhas);

const pessoasComUltimaLetraA = pessoas.filter(obj => obj.nome.slice(-1) == "a");
console.log(pessoasComUltimaLetraA);