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

// new Object > Object.prototype (vem implicitamente de uma chave chamada __proto__)

// Veja o código a seguir no navegador:
const objA = {
  chaveA: 'A'
}

const objB = {
  chaveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);

// Não utilize o __proto__ pois pode causar erros e problemas de performance
// Prefira utilizar o método Object.getPrototypeOf

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  // Agora não criaremos mais métodos aqui!!
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100)); 
}

const p1 = new Produto('Camiseta', 30);

p1.aumento(10);
console.log(p1);

p1.desconto(10);
console.log(p1);

// Literal
const p2 = {
  nome: 'Caneca',
  preco: 50
}
Object.setPrototypeOf(p2, Produto.prototype); // Altera o protoype de objetos literais

p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 20
  },
});

p3.aumento(10);
console.log(p3);