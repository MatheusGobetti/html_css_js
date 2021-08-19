// defineProperty - defineProperties
// Define propriedades para cada objeto e seus atributos. O que pode e não pode ser feito com eles

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', { 
    enumerable: true, // Exibe a chave
    value: estoque, // Valor
    writable: true, // Define se o atributo pode ou não ser alterado
    configurable: false // Define se pode apagar ou reconfigurar a chave
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: nome,
      writable: true, 
      configurable: true
    },
    preco: {
      enumerable: true, 
      value: preco,
      writable: true, 
      configurable: true
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);

// Testes do defineProperty
p1.estoque = 500;
delete p1.estoque;

console.log(p1);
console.log(p1.nome, p1.preco, p1.estoque);
console.log(Object.keys(p1)); // Visualiza as chaves (atributos) do objeto
