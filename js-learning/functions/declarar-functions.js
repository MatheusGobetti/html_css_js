// Declaração de função (Function hoisting)

function falaOi () {
  console.log('Hello world!');
}

falaOi();

// First-class objects (Objetos de primeira classe)

// Function expression
const souUmDado = function () { // Amazenando uma função em uma variável ou constante
  console.log('Sou um dado.');
}

function executaFuncao (funcao) {
  funcao(); // Ação de executar
}

executaFuncao(souUmDado); // Execução propriamente dita

// Arrow function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}

funcaoArrow();

// Dentro de um objeto

const objeto = {
  falar() {
    console.log('Estou falando');
  }
}

objeto.falar();