// Polimorfismo de sobrecarga não existe em Javascript!

// Superclasse com construtor
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

// Métodos
Conta.prototype.sacar = function(valor) {
  if(this.saldo < valor) {
    console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.getSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.getSaldo();
};

Conta.prototype.getSaldo = function() {
  console.log(`\nTransação realizada com sucesso.\nAg/cc: ${this.agencia}/${this.conta} | ` +
  `Saldo R$${this.saldo.toFixed(2)}\n`);
};

// Herança
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if((this.saldo + this.limite) < valor) {
    console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.getSaldo();
};

// Polimorfismo acontece aqui
// No caso é o mesmo método das outras contas, mas se comporta de maneira diferente
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// Instâncias e utilização dos métodos
const conta1 = new Conta(1000, 962857, 450);
console.log(conta1);
conta1.depositar(50);
conta1.sacar(3000);
conta1.sacar(47);
console.log(conta1);

const cc1 = new ContaCorrente(2000, 467415, 0, 100);
cc1.depositar(10);
cc1.sacar(90);
cc1.sacar(30);

const cp1 = new ContaPoupanca(3000, 165233, 0);
cp1.depositar(25);
cp1.sacar(15);
cp1.sacar(11);

