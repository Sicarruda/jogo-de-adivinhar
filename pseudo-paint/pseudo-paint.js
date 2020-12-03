var estadoAtual = {
  ferramenta: null,
  cor: "#000000",
  tamanho: 1,
  borda: true,
};

var ultimaPosicaoMouse;

var desenhando = false;

function usarQuadrado() {
  estadoAtual.ferramenta = "quadrado";
}

function usarElipse() {
  estadoAtual.ferramenta = "elipse";
}

function usarLinha() {
  estadoAtual.ferramenta = "linha";
}

function usarCor(cor) {
  estadoAtual.cor = cor;
  fill(estadoAtual.cor);
  if (estadoAtual.borda) {
    stroke(estadoAtual.cor);
  }
}

function aumentarLinha(tamanho) {
  estadoAtual.tamanho = tamanho;
  if (estadoAtual.tamanho === 1) {
    strokeWeight(1);
  }
  if (estadoAtual.tamanho === 2) {
    strokeWeight(3);
  }
  if (estadoAtual.tamanho === 3) {
    strokeWeight(6);
  }
}

function usarBorracha() {
  estadoAtual.ferramenta = "borracha";
}
function usarPincel() {
  estadoAtual.ferramenta = "pincel";
}
function usarLapis() {
  estadoAtual.ferramenta = "lapis";
}
function setup() {
  const canvas = createCanvas(900, 650);
  background("#FFFFFF");
}

function draw() {}

function mousePressed() {
  //equivale a um if mas não possui a posibilidade de utilizar &&
  switch (estadoAtual.ferramenta) {
    case "quadrado":
    case "elipse":
    case "linha":
      estadoAtual.p1 = [mouseX, mouseY];
      break;
    case "borracha":
    case "pincel":
    case "lapis":
      desenhando = true;
      break;

    default:
      console.error(
        `Caso não definido para ferramenta=${estadoAtual.ferramenta}`
      );
  }
}

/* mesmo codigo acima só que utilizando if 
  if (
    estadoAtual.ferramenta === "quadrado" ||
    estadoAtual.ferramenta === "elipse" ||
    estadoAtual.ferramenta === "linha"
  ) {
    estadoAtual.p1 = [mouseX, mouseY];
  }
  if (
    estadoAtual.ferramenta === "borracha" ||
    estadoAtual.ferramenta === "pincel" ||
    estadoAtual.ferramenta === "lapis"
  ) {
    desenhando = true;
  }
}*/

function mouseDragged() {
  if (estadoAtual.ferramenta === "borracha" && desenhando == true) {
    estadoAtual.p1 = [mouseX, mouseY];
    var tamanho;
    if (estadoAtual.tamanho === 1) {
      tamanho = (estadoAtual.tamanho + 1) * 10;
    } else if (estadoAtual.tamanho === 2) {
      tamanho = (estadoAtual.tamanho + 1) * 10;
    } else if (estadoAtual.tamanho === 3) {
      tamanho = (estadoAtual.tamanho + 1) * 10;
    }
    push();
    fill("#FFFFFF");
    stroke("#FFFFFF");
    rect(estadoAtual.p1[0], estadoAtual.p1[1], tamanho, tamanho);
    pop();
  }
  if (estadoAtual.ferramenta === "pincel" && desenhando == true) {
    estadoAtual.p1 = [mouseX, mouseY];
    if (estadoAtual.tamanho === 1) {
      tamanho = (estadoAtual.tamanho + 1) * 5;
    } else if (estadoAtual.tamanho === 2) {
      tamanho = (estadoAtual.tamanho + 1) * 5;
    } else if (estadoAtual.tamanho === 3) {
      tamanho = (estadoAtual.tamanho + 3) * 5;
    }
    push();
    fill(estadoAtual.cor);
    circle(estadoAtual.p1[0], estadoAtual.p1[1], tamanho);
    strokeWeight(tamanho + 2);
    line(
      ultimaPosicaoMouse[0],
      ultimaPosicaoMouse[1],
      estadoAtual.p1[0],
      estadoAtual.p1[1]
    );
    ultimaPosicaoMouse = [estadoAtual.p1[0], estadoAtual.p1[1]];
    pop();
  }
  if (estadoAtual.ferramenta === "lapis" && desenhando == true) {
    estadoAtual.p1 = [mouseX, mouseY];
    if (estadoAtual.tamanho === 1) {
      tamanho = estadoAtual.tamanho;
    } else if (estadoAtual.tamanho === 2) {
      tamanho = estadoAtual.tamanho + 1;
    } else if (estadoAtual.tamanho === 3) {
      tamanho = estadoAtual.tamanho * 2;
    }
    push();
    stroke(estadoAtual.cor);
    strokeWeight(tamanho);
    line(
      ultimaPosicaoMouse[0],
      ultimaPosicaoMouse[1],
      estadoAtual.p1[0],
      estadoAtual.p1[1]
    );
    ultimaPosicaoMouse = [estadoAtual.p1[0], estadoAtual.p1[1]];
    pop();
  }
}

function mouseMoved() {
  ultimaPosicaoMouse = [mouseX, mouseY];
}

function mouseReleased() {
  if (estadoAtual.ferramenta === "quadrado") {
    estadoAtual.p2 = [mouseX, mouseY];

    push();

    const altura = estadoAtual.p2[0] - estadoAtual.p1[0];
    const largura = estadoAtual.p2[1] - estadoAtual.p1[1];

    rect(estadoAtual.p1[0], estadoAtual.p1[1], altura, largura);

    pop();
  }
  if (estadoAtual.ferramenta === "elipse") {
    estadoAtual.p2 = [mouseX, mouseY];
    push();

    const altura = estadoAtual.p2[0] - estadoAtual.p1[0];
    const largura = estadoAtual.p2[1] - estadoAtual.p1[1];
    const centroX =
      (estadoAtual.p2[0] - estadoAtual.p1[0]) / 2 + estadoAtual.p1[0];
    const centroY =
      (estadoAtual.p2[1] - estadoAtual.p1[1]) / 2 + estadoAtual.p1[1];

    ellipse(centroX, centroY, altura, largura);
    pop();
  }
  if (estadoAtual.ferramenta === "linha") {
    estadoAtual.p2 = [mouseX, mouseY];
    push();
    const altura = estadoAtual.p2[0];
    const largura = estadoAtual.p2[1];
    line(estadoAtual.p1[0], estadoAtual.p1[1], altura, largura);
    pop();
  }
  if (
    estadoAtual.ferramenta === "borracha" ||
    estadoAtual.ferramenta === "pincel" ||
    estadoAtual.ferramenta === "lapis"
  ) {
    desenhando = false;
  }
}
