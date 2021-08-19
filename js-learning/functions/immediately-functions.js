// Funções imediatas IIEFE -> Immediately Invoked Function Expression

// Funções normais
function qualquerCoisa() {
  console.log(1010101010101);
}

qualquerCoisa();

// IIEFE
(function(idade, peso, altura) {
  
  const sobrenome = 'Gobetti';
  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }

  function falaNome() {
    console.log(criaNome('Matheus'))
  }

  falaNome();

  console.log(idade, peso, altura);
})(20, 55, 1.70);

const nome = 'Qualquer coisa'; // Não está no mesmo escopo
