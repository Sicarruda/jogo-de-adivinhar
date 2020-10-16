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

var listaPalavras = [
    { nome: "ave", dica1: "Vertebrado ovíparo", dica2: "Coberto de penas", dica3: "Tem assas" },
    { nome: "nave", dica1: "Veículo astronáutico interplanetário", dica2: "Trasporta astronautas", dica3: "Leva coisas para fora da orbita" },
    { nome: "casa", dica1: "Construção em alvenaria usada para morar", dica2: "Sinonimo de lar", dica3: "Habitação" },
    { nome: "canivete", dica1: "Pequena faca de bolso", dica2: "Usada em acampamentos", dica3: "Com muitas funções" },
    { nome: "bruma", dica1: "Nebulosidade causada por gotículas de água que ficam suspensas e diminuem a visibilidade", dica2: "Nevoeiro", dica3: "O que dificulta o entendimento claro de alguma coisa" },
    { nome: "pai", dica1: "Genitor", dica2: "Aquele que tem ou teve filho(s)", dica3: "... Nosso, oração" },
    { nome: "anjo", dica1: "Ser puramente espiritual", dica2: "Transmite mensagens espirituais às pessoas na Terra", dica3: "Ser anjelical" },
    { nome: "cachorro", dica1: "Melhor amigo do homem", dica2: "Animal de 4 patas", dica3: "indivíduo desprezível" },
    { nome: "folha", dica1: "Órgão de respiração das plantas", dica2: "que produz fotossíntese", dica3: "Geralmente verde" },
    { nome: "internet", dica1: "Rede de computadores através da qual é possível conectar e interligar computadores ao redor do mundo", dica2: "Usada para acessar o Facebook", dica3: "Proporciona Wi-Fi" }
];

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
    if (respostaJogador == palavraSorteada.nome) {
        pontuacao = pontuacao + 1;
        placar.innerHTML = pontuacao;
        palavraCorreta.innerHTML = palavraSorteada.nome;
        fimDoJogo = true;
    } else if (respostaJogador != palavraSorteada.nome && tentativasJogador >= 1) {
        zerarTentativas();
    } else {
        palavraCorreta.innerHTML = palavraSorteada.nome;
        fimDoJogo = true;
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
    var novaPalavraSorteada = sortearPalavra(listaPalavras);
    palavraSorteada = novaPalavraSorteada;
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