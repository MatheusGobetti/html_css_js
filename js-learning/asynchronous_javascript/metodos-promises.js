function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if(typeof msg !== 'string') {
        reject('Caí no erro...');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject

const promises = [
  // 'Primeiro valor',
  esperaAi(1000, rand(1, 5)),
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  // 'Outro valor'
];

// Race
Promise.race(promises)
  .then(valor => {
    console.log(valor);
  })
  .catch(erro => {
    console.log(erro);
  });

// All
Promise.all(promises)
  .then(valor => {
    console.log(valor);
  })
  .catch(erro => {
    console.log(erro);
  });

// Resolve
function baixaPagina() {
  const emCache = true;

  if(emCache) {
    return Promise.resolve('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

// Reject
function baixaPagina2() {
  const emCache = true;

  if(emCache) {
    return Promise.reject('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));

baixaPagina2()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));
