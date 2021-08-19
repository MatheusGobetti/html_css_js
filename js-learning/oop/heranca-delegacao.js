// Produto -> aumento, desconto
// Camiseta -> cor | caneca -> material

function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,

    get: () => estoque,
    set: (valor) => {
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  })
}

// Javascript não possui uma herança de fato
// Ao chamar o método abaixo, na verdade estamos adicionando um novo objeto em uma cadeia de protótipos
Caneca.prototype = Object.create(Produto.prototype); // Faz a herança que na verdade é uma delegação
Caneca.prototype.constructor = Caneca; // Adere o construtor

const produto = new Produto('Gen', 10);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca de JS', 45, 'Colorida', 5);


camiseta.aumento(10);
console.log(camiseta);

produto.aumento(50);
console.log(produto);

caneca.aumento(10);
caneca.estoque = 12;
console.log(caneca.estoque);
