// Map -> Sempre terá o mesmo tamanho do array original

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);

const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave ID em cada objeto

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

const apenasNomes = pessoas.map(obj => obj.nome);
console.log(apenasNomes);

const apenasIdade = pessoas.map(obj => ({ idade: obj.idade}));
console.log(apenasIdade);

const chaveID = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
console.log(chaveID);
console.log(pessoas); // Não altera original