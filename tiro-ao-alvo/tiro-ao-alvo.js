var bolinha;
var contador = 0;
var tamanhoBolinha = 30;
var vetorVelocidade1 = 2;
var vetorVelocidade2 = 1;
var isBolinhaMarcada = true;

const pontuacao = document.getElementById("pontuacao");

function zerarPontuacao() {
  contador = 0;
  pontuacao.innerHTML = contador;
}
function setup() {
  const canvas = createCanvas(500, 500);
  bolinha = posicaoAleatoriaBolinha();
  canvas.mouseClicked(acertarAlvo);
}

function draw() {
  background(200);
  bolinha.draw();
  bolinha.movimentar();

  if (verificaSeMouseEstaDentroDaBolinha(bolinha)) {
    bolinha.cor = "#FF0000";
  } else {
    bolinha.cor = "#000000";
  }
}

function posicaoAleatoriaBolinha() {
  const posicaoX = Math.floor(Math.random() * 499 + 1);
  const posicaoY = Math.floor(Math.random() * 499 + 1);
  var vetorPosicao = createVector(posicaoX, posicaoY);
  var vetorVelocidade = createVector(
    Math.random() * vetorVelocidade1 - vetorVelocidade2,
    Math.random() * vetorVelocidade1 - vetorVelocidade2
  );
  if (vetorVelocidade.x == 0 && vetorVelocidade.y == 0) {
    vetorVelocidade.x = 1;
  }
  var novaBolinha = new Bolinha(
    vetorPosicao,
    vetorVelocidade,
    tamanhoBolinha,
    isBolinhaMarcada
  );
  return novaBolinha;
}

function verificaPontoDentroDeQuadrado(pX, pY, qX, qY, r) {
  return pX <= qX + r && pX >= qX - r && pY <= qY + r && pY >= qY - r;
}

function verificaSeMouseEstaDentroDaBolinha(bolinha) {
  return verificaPontoDentroDeQuadrado(
    mouseX,
    mouseY,
    bolinha.posicao.x,
    bolinha.posicao.y,
    bolinha.alvo
  );
}

function acertarAlvo() {
  if (verificaSeMouseEstaDentroDaBolinha(bolinha)) {
    contador += 1;
    pontuacao.innerHTML = contador;
    bolinha = posicaoAleatoriaBolinha();
    regularDificuldade(contador);
    isBolinhaMarcada = false;
  } else {
    contador = 0;
    tamanhoBolinha = 30;
    vetorVelocidade2 = 1;
    vetorVelocidade1 = 2;
    bolinha.alvo = 30;
    isBolinhaMarcada = true;
  }
}

function regularDificuldade(contador) {
  if (contador == 5) {
    tamanhoBolinha = tamanhoBolinha - 5;
    vetorVelocidade1 = vetorVelocidade1 + 2;
    vetorVelocidade2 = vetorVelocidade2 + 2;
    bolinha.alvo = 25;
  } else if (contador == 10) {
    tamanhoBolinha = tamanhoBolinha - 5;
    vetorVelocidade1 = vetorVelocidade1 + 4;
    vetorVelocidade2 = vetorVelocidade2 + 4;
    bolinha.alvo = 20;
  } else if (contador == 15) {
    tamanhoBolinha = tamanhoBolinha - 5;
    vetorVelocidade1 = vetorVelocidade1 + 5;
    vetorVelocidade2 = vetorVelocidade2 + 5;
    bolinha.alvo = 15;
  }
}
