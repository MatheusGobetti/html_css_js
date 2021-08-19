// Escopo léxico

const nome = 'Otávio';

function falaNome () {
  console.log(nome);
}

function usaFalaNome () {
  const nome = 'Miranda';
  falaNome();
}

usaFalaNome();

// ------------------------------------------

// Clojure

function retornaFuncao (nome) {
  return retornaNome = () => {
    return nome;
  }
}

const funcao1 = retornaFuncao('Matheus'); // Vai ser sempre esse valor, não mudará, por conta do fechamento de clojure
const funcao2 = retornaFuncao('Sarah'); // Vai ser sempre esse valor, não mudará, por conta do fechamento de clojure


console.log(funcao1(), funcao2());
console.log(funcao1('Alexandre'), funcao2());
console.log(funcao1(), funcao2('Talita'));