// Método splice

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice atual, qtd a ser removido, elemento1, elemento2, elemento3...);


// Simulações

// pop
const removido1 = nomes.splice(4, 1);
console.log(nomes, removido1);
// É o mesmo que:
const removido2 = nomes.splice(-1, 1);
console.log(nomes, removido2);

const removido3 = nomes.splice(-1, Number.MAX_VALUE);
console.log(nomes, removido3);


const removido4 = nomes.splice(-1, Number.MAX_VALUE, 'Silvio', 'Mariana', 'Diego');
console.log(nomes, removido4);

console.log('\n');

// Shift
const nomes2 = ['Livia', 'Nayara', 'Sabrina', 'Wesley', 'Tiago'];
console.log(nomes2);

const removidosShift = nomes2.splice(-1, 1);
console.log(removidosShift);
console.log(nomes2);


// Push
nomes2.splice(nomes2.length, 0, 'Iago');
console.log(nomes2);

// Unshift
nomes2.splice(0, 0, 'Julio');
console.log(nomes2);
