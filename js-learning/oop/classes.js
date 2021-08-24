class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const p1 = new Pessoa('Matheus', 'Gobetti');
const p2 = new Pessoa('Joana', 'Sato');
const p3 = new Pessoa('Joao', 'Mafra');
const p4 = new Pessoa('Felipe', 'Marquezine');
const p5 = new Pessoa('Kaique', 'Oliveira');

console.log(p1);