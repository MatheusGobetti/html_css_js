// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, alt, pes) {
  return {
    nome, 
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala(assunto = 'falando sobre nada...') {
      return `${this.nome} está ${assunto}`;
    },

    altura: alt,
    peso: pes,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }

  };
}

const p1 = criaPessoa('Matheus', 'Gobetti', 1.7, 56);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);

console.log(p1.nome, p1.sobrenome);
console.log(`IMC do(a) ${p1.nomeCompleto} =`, p1.imc);
console.log(`IMC do(a) ${p2.nomeCompleto}  =`, p2.imc);

p1.nomeCompleto = 'Maria Oliveira Silva';

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());



// console.log(p1.imc());
// console.log(p1.fala('falando sobre Javascript'));
// console.log(p2.nome);
// console.log(p2.imc());