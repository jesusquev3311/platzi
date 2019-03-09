document.addEventListener('keyup', dibujarTeclado);
let cuadrito = document.getElementById('area_de_dibujo');
let papel = cuadrito.getContext('2d');
let x = 150;
let y = 150;


const teclas = {UP:38,DOWN:40,LEFT:37,RIGHT:39};

function dibujarLineas(color, xinicial, yinicial,xfinal,yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLineas("red", 149,149,151,151, papel);


function dibujarTeclado(evento) {
    let colorcito = 'blue';
    let movimiento = 10;
   switch (evento.keyCode) {
       case teclas.UP:
          dibujarLineas(colorcito,x,y,x,y - movimiento, papel);
          y = y - movimiento;
           break;
       case teclas.DOWN:
           dibujarLineas(colorcito,x,y,x,y + movimiento, papel);
           y = y + movimiento;
           break;
       case teclas.LEFT:
           dibujarLineas(colorcito,x,y,x - movimiento,y, papel);
           x = x - movimiento;
           break;
       case teclas.RIGHT:
           dibujarLineas(colorcito,x,y,x + movimiento,y, papel);
           x = x + movimiento;
           break;
       default:
           console.log('otra tecla');
   }
}
