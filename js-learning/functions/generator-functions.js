// Função recursiva
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(-10);

// Função geradora
function* geradora1() {
  // Codigo
  yield 'Valor 1';
  // Codigo
  yield 'Valor 2';
  // Codigo
  yield 'Valor 3';
}
const g1 = geradora1();

// for(let valor of g1) {
//   console.log(valor);
// }

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

function* geradora2() {
  let i = 0;
  while(true) {
    yield i; 
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('\n');

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

function* geradora4() {
  yield* geradora3();
  yield 4;
  yield 5;
  yield 6;
}

const g4 = geradora4();
for(let valor of g4) {
  console.log(valor);
}

console.log('\n');

function* geradora5() {

  yield function() {
    console.log('Vim do y1');
  }

  yield function() {
    console.log('Vim do y2');
  }
}


const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();