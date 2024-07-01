// Seleciona os elementos do DOM
const formAdicionar = document.getElementById('form-adicionar');
const inputPalavra = document.getElementById('palavra');
const inputTraducao = document.getElementById('traducao');
const listaPalavras = document.getElementById('palavras');
const botaoIniciarQuizz = document.getElementById('iniciar-quizz');
const quizzArea = document.getElementById('quizz-area');
const pergunta = document.getElementById('pergunta');
const inputResposta = document.getElementById('resposta');
const botaoVerificarResposta = document.getElementById('verificar-resposta');
const resultado = document.getElementById('resultado');

// Array para armazenar palavras e suas traduções
let palavras = [];

// Evento para adicionar uma nova palavra ao array e à lista do DOM
formAdicionar.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Obtém os valores dos inputs
    const palavra = inputPalavra.value.trim();
    const traducao = inputTraducao.value.trim();
    
    // Verifica se os inputs não estão vazios
    if (palavra && traducao) {
        // Adiciona a palavra e a tradução ao array
        palavras.push({ palavra, traducao });
        
        // Atualiza a lista de palavras no DOM
        atualizarListaPalavras();
        
        // Limpa os inputs
        inputPalavra.value = '';
        inputTraducao.value = '';
    }
});

// Função para atualizar a lista de palavras no DOM
function atualizarListaPalavras() {
    // Limpa a lista atual
    listaPalavras.innerHTML = '';
    
    // Adiciona cada palavra do array à lista do DOM
    palavras.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.palavra} - ${item.traducao}`;
        listaPalavras.appendChild(li);
    });
}

// Evento para iniciar o quizz
botaoIniciarQuizz.addEventListener('click', function () {
    // Verifica se há palavras para o quizz
    if (palavras.length > 0) {
        // Oculta o botão e exibe a área do quizz
        botaoIniciarQuizz.style.display = 'none';
        quizzArea.style.display = 'block';
        
        // Inicia o quizz com a primeira pergunta
        proximaPergunta();
    }
});

// Variável para armazenar o índice da pergunta atual
let perguntaAtual = 0;

// Função para exibir a próxima pergunta no quizz
function proximaPergunta() {
    // Seleciona uma palavra aleatória do array
    perguntaAtual = Math.floor(Math.random() * palavras.length);
    pergunta.textContent = `Traduza: ${palavras[perguntaAtual].palavra}`;
    inputResposta.value = '';
    resultado.textContent = '';
}

// Evento para verificar a resposta do quizz
botaoVerificarResposta.addEventListener('click', function () {
    // Obtém a resposta do input
    const resposta = inputResposta.value.trim();
    
    // Verifica se a resposta está correta
    if (resposta.toLowerCase() === palavras[perguntaAtual].traducao.toLowerCase()) {
        resultado.textContent = 'Correto!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Incorreto! A resposta correta é: ${palavras[perguntaAtual].traducao}`;
        resultado.style.color = 'red';
    }
    
    // Exibe a próxima pergunta após um breve intervalo
    setTimeout(proximaPergunta, 2000);
});
