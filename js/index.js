
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;
var ballRadius = 10

//paleta
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// Detectar las teclas direccionales de izquierda/derecha
var rightPressed = false;
var leftPressed = false;

//agrgar eventos de presionado y soltado de teclas
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);

// Esta funcion determina si se presiona una teclas
function keyDownHandler(event){
  if (event.keyCode == 39) {
    rightPressed = true;
  } else if (event.keyCode == 37) {
    leftPressed = true;
  }
}

// Esta funcion determina si se suulta una teclas
function keyUpHandler(event){
    if (event.keyCode == 39) {
      rightPressed = false;
    } else if (event.keyCode == 37) {
      leftPressed = false;
    }
}

// Esta funcion dibuja un paleta
function drawPaddle() {

 context.beginPath();
 context.rect(paddleX,canvas.height - paddleHeight,paddleWidth, paddleHeight);
 context.fillStyle = "#54a0ff";
 context.fill();
 context.closePath();
}


// Esta función dibuja un circulo de la posicion x, y
function drawBall() {

  context.beginPath();
  context.arc(x, y, ballRadius,0,Math.PI*2);
  context.fillStyle="#0095DD";
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

// se llama  a la funcion de dibujar un circulo
  drawBall();

  // Se llama la funcion de dibujar la paleta
  drawPaddle();

  // veriflaicar si llego al limite de arriva/ABAJO
  if (y + dy < 0 || y + dy > canvas.height ) {
    dy = -dy;
  }


  // verificar si llego al limite izquiedo/derecho
  if (x + dx < 0 || x + dx > canvas.width ) {
    dx = -dx;
  }


  x += dx;
  y += dy;
}

setInterval(draw, 10);
