function main () {
    // Caputrar evento de submit do formulário
    const form = document.querySelector('#formulario');
    // 'Escuta' a ação do botão de submit do formulário
    form.addEventListener('submit', function(evento) {
        // Previne o envio do formulário
        evento.preventDefault(); 
        // Informa o elemento que recebe o evento (peso e altura) no input
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');
        // Recebe o valor transformando para number e armazenando em uma variável
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        // Se peso for inválido...
        if(!peso) {
            // Chama a função para exibir na tela
            setResultado('Peso inválido', false); // No parâmetro isValid retorna falso
            // Para o código
            return;
        }

        // Se altura for inválida...
        if(!altura) {
            // Chama a função para exibir na tela
            setResultado('Altura inválida', false); // No parâmetro isValid retorna falsa
            // Para o código
            return;
        }

        // Chamando função getImc e armazenando na função imc
        const imc = getImc(peso, altura);
        // Chamando getNivelImc e armazenando na função nivelImc
        const nivelImc = getNivelImc(imc);
        // Exibindo o imc com o nível na tela e armazenando na função mensagem
        const mensagem = `Seu IMC é: ${imc} (${nivelImc}).`;

        // Caso for válido, exibe a mensagem do imc e o nível
        setResultado(mensagem, true);

    });

    /* 
    Menos de 18.5 - Abaixo do peso
    Entre 18.5 e 24.9 - Peso normal
    Entre 25 e 29.9 - Sobrepeso
    Entre 30 e 34.9 - Obesidade grau 1
    Entre 35 e 39.9 - Obesidade grau 2
    Mais do que 40 - Obesidade grau 3
    */

    // Função que informa em que estágio está o IMC da pessoa
    function getNivelImc(imc) {
        // Armazena os resultados do IMC em um array chamado 'Nivel'
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >= 39.9) return nivel[5];
        if(imc >= 34.9) return nivel[4];
        if(imc >= 29.9) return nivel[3];
        if(imc >= 24.9) return nivel[2];
        if(imc >= 18.5) return nivel[1];
        if(imc < 18.5) return nivel[0];
        
    }

    // Função que calcula o IMC
    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        // Retorna o IMC com 2 casas decimais
        return imc.toFixed(2);
    }

    // Função que serve para o único propósito de criar parágrafos
    function criaParagrafo(className) {
        // Cria um parágrafo
        const p = document.createElement('p'); 
        return p;

        /* 
        Ou poderia fazer:
        // Adiciona uma classe para o parágrafo
        p.classList.add(className);
        // Colocando a mensagem de resultado no HTML
        p.innerHTML = 'Formulário enviado!'; 
        */
    }

    // Nesta função, o que for enviado de texto será adicionado na div resultado
    function setResultado(mensagem, isValid){
        // Capturar evento do resultado no HTML
        const resultado = document.querySelector('#resultado');
        // Limpa o que estiver dentro da variável resultado
        resultado.innerHTML = '';
        // Coloca a função criaParagrafo em uma função 'p'
        const p = criaParagrafo();
        // Trocando a cor do fundo buscando a classe criada no CSS de acordo com a validez 
        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad');
        }
        // Colocando o parágrafo com a mensagem do resultado no HTML
        p.innerHTML = mensagem;
        // Inserir o elemento 'p' na div 
        resultado.appendChild(p); 

    }
}


main();