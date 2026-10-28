let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio(1, 10);
let tentativas = 1;
exibirMensagemInicial();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', );
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}


function gerarNumeroAleatorio(min, max) {
    let numeroEscolhido = parseInt(Math.random() * (max - min + 1) + min);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;  
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTexto('p', mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let palavraChute = chute > numeroSecreto ? 'menor' : 'maior';
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', `O número secreto é ${palavraChute} que ${chute}`);
        tentativas++;
    }
    limparInput();
}

function reiniciarJogo() {
    tentativas = 1; 
    numeroSecreto = gerarNumeroAleatorio(1,10);
    exibirTexto('h1', 'Jogo do número secreto');
    exibirMensagemInicial();
    limparInput();

}

function limparInput(){
    document.querySelector('input').value = '';
}


