// Função construtora -> Constrói objetos
// Função Fábrica -> Fabrica objetos

// Construtora -> Sempre iniciar o nome com letra maiúscula = Pessoa() {}

function Pessoa(nome, sobrenome) {
  
  // Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = () => {

  }

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.seApresenta = () => {
    console.log('Meu nome é', this.nome);
  }
}

const p1 = new Pessoa('Matheus', 'Gobetti');
const p2 = new Pessoa('Júlia', 'Oliveira');

console.log(p1.nome, p1.sobrenome);

p2.seApresenta();