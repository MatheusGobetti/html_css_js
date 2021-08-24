// É necessário rodar no navegador o código abaixo:

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  }
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
};

const pessoaPrototype = { ...falar, ...comer, ...beber  };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Matheus', 'Gobetti');
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p2);