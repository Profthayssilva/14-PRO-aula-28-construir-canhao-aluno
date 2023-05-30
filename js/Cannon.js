// Adicione as propriedades na função constructor() e adicione o ângulo

class Cannon {
  constructor(x, y, width, height, angle) {
 
    
   
 

  }

  // Adicione a função arc() e rect() para criar o canhão
  display() {
   
    //9- Adicione o console.log para verificar o ângulo.

    console.log(this.angle);

//   8 / 10 -  Mude o ângulo de cannon para cima quando a tecla de seta para a esquerda for
// pressionada e para baixo quando a tecla de seta para direita for pressionada.

//10.Adicione a condição para restringir o movimento.
    if (keyIsDown(      ) && this.angle < 0000 ) {
      this.angle += 0.02;
    }

    if (keyIsDown(     ) && this.angle > 0000 ) {
      this.angle -= 0.02;
    }

    // Adicione as funções push, pop e translate dentro da função display().
    push();
    translate(this.x, this.y);
    rotate(this.angle);
      // Adicione a função arc() e rect() para criar o canhão
    rect(     );
    pop();
    arc(      );
    noFill();
  }
}
