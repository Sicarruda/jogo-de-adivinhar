class Bolinha {
  posicao;
  velocidade;
  tamanho;
  cor;
  alvo;

  set alvo(alvo) {
    this.alvo = alvo;
  }

  set cor(cor) {
    this.cor = cor;
  }

  get cor() {
    return this.cor;
  }

  set tamanho(tamanho){
    this.tamanho = tamanho
  }

  constructor(posicao, velocidade, tamanho) {
    this.posicao = posicao;
    this.velocidade = velocidade;
    this.tamanho = tamanho;
    this.cor = "#0000ff";
    this.alvo = 30;
  }

  draw() {
    push();
    fill(this.cor);
    circle(this.posicao.x, this.posicao.y, this.tamanho);
    pop();
  }

  movimentar() {
    const px = this.posicao.x;
    const py = this.posicao.y;

    if (px <= 0 || px >= 500) {
      this.velocidade.mult(-1, 1);
    }

    if (py <= 0 || py >= 500) {
      this.velocidade.mult(1, -1);
    }

    this.posicao.add(this.velocidade);
  }
}
