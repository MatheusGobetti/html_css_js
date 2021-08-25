function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    if(typeof msg !== 'string') reject(new Error('Dados não correspondem à tipagem correta (string)'));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com DB', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando os dados da Base...', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela...');
  })
  .catch(e => {
    console.log('ERRO:', e);
  });

  console.log('Isso aqui será exibido antes de qualquer promise.');