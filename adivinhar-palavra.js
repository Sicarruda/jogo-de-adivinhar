function zerarPontuacao(){
    placar.innerHTML = 0;
    pontuacao = 0
}

var placar = document.getElementById('pontuacao');
var pontuacao = 0; 
var tentativas = document.getElementById('tentativas');
var tentativasJogador = 6
var larguraPalavra = document.getElementById("larguraPalavra")
var listaPalavras = ["ave", "nave", "casa", "canivete","bruma","pai","anjo","cachorro","folha","internet"];
var palavraCorreta = document.getElementById("palavraCorreta");

function numeroAleatorio(array){
    var conta = Math.floor(Math.random() * array.length + 1);
    return conta;
}

function sortearPalavra(array){
    var palavraAleatoria = numeroAleatorio(array)
    return array[palavraAleatoria];
}
var palavraSorteada = sortearPalavra(listaPalavras);

function compararResposta(respostaJogador){
    if(respostaJogador == palavraSorteada){
        pontuacao = pontuacao + 1;
        placar.innerHTML = pontuacao;
    }else if(respostaJogador != palavraSorteada && tentativasJogador >= 1){
        tentativasJogador = tentativasJogador - 1;
        tentativas.innerHTML = tentativasJogador;
    }else{
        palavraCorreta.innerHTML = palavraSorteada;
    }
}

larguraPalavra.innerHTML = palavraSorteada.length;




