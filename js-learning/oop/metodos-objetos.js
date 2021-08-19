// Métodos geralmente utilizados para realizar configurações de objetos

const produto = { nome: 'Produto', preco: 1.8};
const caneca = { ...produto, material: 'Porcelana' };
const lapis = Object.assign({}, produto, {material: 'Madeira'}); // Faz o mesmo que o spread acima


produto.nome = 'Caderno';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);
console.log(lapis);

Object.defineProperty(lapis, 'nome', {writable: false, configurable: false});
lapis.nome = 'Faber Castel';
delete lapis.nome;
console.log(Object.getOwnPropertyDescriptor(lapis, 'nome'));
console.log(lapis);

console.log(Object.keys(produto)); // Retorna as chaves do objeto
console.log(Object.values(produto)); // Retorna os valores do objeto
console.log(Object.entries(produto)); // Retorna as chaves e valores do objeto