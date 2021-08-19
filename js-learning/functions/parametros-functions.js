// Arguments só funciona na função declarada com function e sustenta todos os argumentos enviados

function retornaArgumentos () {
  console.log(arguments[5]); // Pega todos os argumentos passados na execução da função ou o índice especificado
}

retornaArgumentos('Valor', 1, 2, 3, 'Matheus', 5, 6, 7, 'Computador', 9, 10);

// ----------------------------------------------------------------------------------

function retornaSomaArgumentos (a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

retornaSomaArgumentos(1, 2, 3, 4, 5, 6, 7);

// ----------------------------------------------------------------------------------

function exibirValoresEmLetrasErrado (a, b, c, d, e, f, g) {
  console.log(a, b, c, d, e, f, g);
}

exibirValoresEmLetrasErrado(1, 2, 3);

// ----------------------------------------------------------------------------------

function somaDoisNumeros (a, b = ' Inválido ', c = 4) { // A declaração dos parâmetros permite um retorno se a variável não receber nenhum valor
  console.log(a + b + c);
}

somaDoisNumeros(2, undefined, 20);

// ----------------------------------------------------------------------------------

function atribuicaoDesestruturacaoObjeto ({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

atribuicaoDesestruturacaoObjeto({ nome: 'Matheus', sobrenome: 'Gobetti', idade: 20 });

// ----------------------------------------------------------------------------------

function atribuicaoDesestruturacaoArray ([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3)
}

atribuicaoDesestruturacaoArray(['Matheus', 'Gobetti', 20]);

// ----------------------------------------------------------------------------------

const fazConta = function (operador, acumulador, ...numeros) { // Rest operator em numeros pega todos os outros argumentos. O rest tem que ser sempre o último
  for (let valores of numeros) {
    
    if (operador === '+') acumulador += valores;
    if (operador === '-') acumulador -= valores;
    if (operador === '*') acumulador *= valores;
    if (operador === '/') acumulador /= valores;

  }
  console.log(acumulador);
};

fazConta('-', 10, 20, 30, 40, 50);

// ----------------------------------------------------------------------------------

const restArgs = (...args) => {
  console.log(args);
};

restArgs('+', 1, 2, 3, 4, 5);