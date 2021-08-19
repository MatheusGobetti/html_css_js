// Getters e Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', { 
    enumerable: true, // Exibe a chave
    configurable: false, // Define se pode apagar ou reconfigurar a chave
    
    get: () => estoquePrivado, // Pega o valor e exibe
    
    set: (valor) => { 
      if(typeof valor != 'number') {
        throw new TypeError('Tipo de atribuição não compatível');
      }
      estoquePrivado = valor; 
    }

  });
}

const p1 = new Produto('Camiseta', 20, 100);
// console.log(p1);

// p1.estoque = "O valor que eu quero";
p1.estoque = 200;

console.log(p1.nome, p1.preco, p1.estoque);

// --------------------------------------------

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa.', '');
      nome = valor;
    }
  }
}

const p2 = criaProduto('Caneta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);