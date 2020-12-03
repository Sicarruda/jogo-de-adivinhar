class Quadrado {
  pontoX;
  pontoY;
  altura;
  largura;
  cor;

  constructor(pontoX, pontoY, altura, largura, cor) {
    this.pontoX = pontoX;
    this.pontoY = pontoY;
    this.altura = altura;
    this.largura = largura;
    this.cor = cor;
  }
  draw() {
    push();
    fill(this.cor);
    rect(this.pontoX, this.pontoY, this.altura, this.largura);
    pop();
  }
}
