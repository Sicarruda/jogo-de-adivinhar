function zerarPontuacao() {
    placar.innerHTML = 0;
    pontuacao = 0
}

var fimDoJogo = false;
var dicas = 0;
var placar = document.getElementById('pontuacao');
var pontuacao = 0;
var tentativas = document.getElementById('tentativas');
var tentativasJogador = 6
var larguraPalavra = document.getElementById("larguraPalavra")
var darDica1 = document.getElementById("dica01");
var darDica2 = document.getElementById("dica02");
var darDica3 = document.getElementById("dica03");
var index = document.getElementById("jogador");

var palavraCorreta = document.getElementById("palavraCorreta");

function zerarTentativas() {
    if (tentativasJogador > 0) {
        tentativasJogador = tentativasJogador - 1;
        return tentativas.innerHTML = tentativasJogador;
    }
}

function numeroAleatorio(array) {
    var conta = Math.floor(Math.random() * array.length + 1);
    return conta;
}

function sortearPalavra(array) {
    var palavraAleatoria = numeroAleatorio(array)
    return array[palavraAleatoria];
}

var palavraSorteada = sortearPalavra(listaPalavras);

function compararResposta(respostaJogador) {
    if (fimDoJogo) {
        return;
    }
    if (respostaJogador.toLowerCase() == palavraSorteada.nome) {
        pontuacao = pontuacao + 1;
        placar.innerHTML = pontuacao;
        palavraCorreta.innerHTML = palavraSorteada.nome;
        fimDoJogo = true;
        alert("Você acertou!");
        index.value = "";
    } else if (respostaJogador.toLowerCase() != palavraSorteada.nome && tentativasJogador >= 1) {
        zerarTentativas();
    } else {
        palavraCorreta.innerHTML = palavraSorteada.nome;
        fimDoJogo = true;
        alert("Você perdeu, tente de novo!")
        index.value = "";
    }
}

larguraPalavra.innerHTML = palavraSorteada.nome.length;

function darDica() {
    if (dicas == 0 && fimDoJogo != true) {
        dicas = dicas + 1;
        zerarTentativas();

        darDica1.innerHTML = palavraSorteada.dica1;
    } else if (dicas == 1 && fimDoJogo != true) {
        dicas = dicas + 1;
        zerarTentativas();

        darDica2.innerHTML = palavraSorteada.dica2;
    } else if (dicas == 2 && fimDoJogo != true) {
        dicas = dicas + 1;
        zerarTentativas();

        darDica3.innerHTML = palavraSorteada.dica3;
    } else {
        dicas = 0;
    }
}

function novaPartida() {
    palavraSorteada = sortearPalavra(listaPalavras);
    tentativas.innerHTML = 6;
    tentativasJogador = 6;
    darDica1.innerHTML = "dica 01:";
    darDica2.innerHTML = "dica 02:";
    darDica3.innerHTML = "dica 03:";
    palavraCorreta.innerHTML = "";
    larguraPalavra.innerHTML = palavraSorteada.nome.length;
    dicas = 0;
    fimDoJogo = false;
}