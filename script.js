
var pontuacao = 0
var placar = document.getElementById('pontuacao');

function jogada(){
   var conta = Math.floor(Math.random() * 10 + 1);
    return conta;
}

function vencedor(){
    var numeroAleatorio = jogada();
    var jogador01 = document.getElementById('jogador').value;
    document.getElementById('computador').innerHTML= numeroAleatorio;
    if(jogador01 == numeroAleatorio){
        alert('Você acertou!');
        pontuacao = pontuacao + 1;
        placar.innerHTML = pontuacao;
    }else{
        alert('Sinto muito, não foi dessa vez');
    }
}

function zerarPontuacao(){
    placar.innerHTML = 0;
    pontuacao = 0
}

