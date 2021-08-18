// Valor por referência
// const nomes = new Array('Eduardo', 'Maria', 'Joana'); - Menos usado

const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];

nomes[3] = 'João';

console.log("Nomes:", nomes);
console.log("Novo:", novo);

const removido = nomes.pop();
const removidoShift = nomes.shift();

console.log("Removido:", removido);
console.log("Removido Shift (remove o primeiro e desloca todos os outros):", removidoShift);

nomes.push('Mariana');
nomes.push('Rodrigo');

console.log(nomes);

nomes.unshift('Roberta'); // Adiciona um elemento no começo do array
console.log(nomes);

const fatiarParte = nomes.slice(1, 3);
console.log(fatiarParte);

const fatiarFinal = nomes.slice(0, -1);
console.log(fatiarFinal);

// Transformando string em array
const nomeString = 'Matheus Gobetti Silva';
const nomesArray = nomeString.split(' ');
console.log(nomesArray);

const arrayParaString = nomesArray.join(' ');
console.log(arrayParaString);