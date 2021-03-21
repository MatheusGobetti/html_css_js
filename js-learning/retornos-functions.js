// Return - Retorna um valor e termina a função

// function soma (a, b) {
//   return a + b; 
// } 

// document.addEventListener('click', function() {
//   document.body.style.backgroundColor = 'lightgreen';
// });

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome }
// }

// const p1 = criaPessoa('Matheus', 'Gobetti');
// const p2 = { nome: 'João', sobrenome: 'Silva'};

// console.log(p1);
// console.log(p2);

// function falaFrase (comeco) {
//   function falaResto (resto) {
//     return comeco + ' ' + resto;
//   }
//   return falaResto;
// }

// const fala = falaFrase('Hello');
// const resto = fala('World!');

// console.log(resto);

function criaMultiplicador (multiplicador) {
  return multiplicacao = (numero) => {
    return numero * multiplicador;
  }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));