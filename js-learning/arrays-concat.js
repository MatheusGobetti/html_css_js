const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2, [7, 8, 9], 'Matheus'); // Método concat junta os arrays, e adiciona mais elementos, mesmo se for de tipos diferentes

console.log(arr3);

const arr4 = [...arr1, 'Hello', ...arr2, ...[100, 200, 300]]; // Utilizando o spread
console.log(arr4);