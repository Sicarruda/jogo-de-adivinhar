var pontuacao = 0

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
        document.getElementById('pontuacao').innerHTML = pontuacao
       
    }else{
        alert('Sinto muito, não foi dessa vez');
    }
}
