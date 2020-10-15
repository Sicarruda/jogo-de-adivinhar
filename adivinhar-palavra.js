function zerarPontuacao(){
    placar.innerHTML = 0;
    pontuacao = 0
}
var dicas = 0;
var placar = document.getElementById('pontuacao');
var pontuacao = 0; 
var tentativas = document.getElementById('tentativas');
var tentativasJogador = 6
var larguraPalavra = document.getElementById("larguraPalavra")

var listaPalavras = [ave = {nome:"ave", dica1:"Vertebrado ovíparo", dica2:"Coberto de penas", dica3:"Tem assas"},
nave = {nome:"nave", dica1:"Veículo astronáutico interplanetário", dica2:"Trasporta astronautas", dica3:"Leva coisas para fora da orbita"},
casa = {nome:"casa", dica1:"Construção em alvenaria usada para morar", dica2:"Sinonimo de lar", dica3:"Habitação"},
canivete={nome:"canivete", dica1:"Pequena faca de bolso", dica2:"Sinonimo de lar", dica3:"Habitação"},
bruma={nome:"bruma", dica1:"Nebulosidade causada por gotículas de água que ficam suspensas e diminuem a visibilidade", dica2:"Nevoeiro", dica3:"O que dificulta o entendimento claro de alguma coisa"},
pai={nome:"pai", dica1:"Genitor",dica2:"Aquele que tem ou teve filho(s)", dica3:"... Nosso, oração"},
anjo={nome:"anjo", dica1:"Ser puramente espiritual", dica2:"Transmite mensagens espirituais às pessoas na Terra", dica3:"Ser anjelical"},
cachorro={nome:"cachorro", dica1:"Melhor amigo do homem", dica2:"Animal de 4 patas", dica3:"indivíduo desprezível"},
folha={nome:"folha", dica1:"Órgão de respiração das plantas",dica2:"que produz fotossíntese", dica3:"Geralmente verde"},
internet={nome:"internet", dica1:"Rede de computadores através da qual é possível conectar e interligar computadores ao redor do mundo", dica2:"Usada para acessar o Facebook", dica3:"Proporciona Wi-Fi"}];

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
    if(respostaJogador == palavraSorteada.nome){
        pontuacao = pontuacao + 1;
        placar.innerHTML = pontuacao;
    }else if(respostaJogador != palavraSorteada.nome && tentativasJogador >= 1){
        tentativasJogador = tentativasJogador - 1;
        tentativas.innerHTML = tentativasJogador;
    }else{
        palavraCorreta.innerHTML = palavraSorteada.nome;
    }
}

larguraPalavra.innerHTML = palavraSorteada.nome.length;

function darDica(){
    console.log("bla");
    if(dicas == 0){
        dicas = dicas + 1;
        var darDica1 = document.getElementById("dica01");
        darDica1.innerHTML = palavraSorteada.dica1;
    }else if(dicas == 1){
        dicas = dicas + 1;
        var darDica2 = document.getElementById("dica02");
        darDica2.innerHTML = palavraSorteada.dica2;
    }else if(dicas == 2){
        dicas = dicas + 1;
        var darDica3 = document.getElementById("dica03");
        darDica3.innerHTML = palavraSorteada.dica3;
    }else{
        dicas = 0;
    }
}


