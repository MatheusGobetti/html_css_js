// Construtor -> Molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Matheus', 'Gobetti'); // <- Pessoa = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(data);


// O prototype é equivalente ao __proto__ no qual armazena todos os outros métodos do objeto
Pessoa.prototype.estouAqui = 'Ola, estou aqui';
console.log(pessoa1.estouAqui);