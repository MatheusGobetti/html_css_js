const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
  });
});
  
}

document.addEventListener('click', e => {
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    carregaPagina(elemento);
  }
});

async function carregaPagina(elemento) {
  const href = elemento.getAttribute('href');

  const objConfig = {
      method: 'GET',
      url: href
  }

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }

  
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}