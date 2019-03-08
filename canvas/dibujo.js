let texto = document.getElementById('texto_lineas')
let boton = document.getElementById('botoncito')

boton.addEventListener('click', dibujoPorClick);

const d = document.getElementById("dibujito");
const lienzo = d.getContext("2d");

function dibujarLineas(color, xinicial, yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}






function dibujoPorClick(){
    const lineas = parseInt(texto.value);
    let l = 0;
    let y1 ;
    let y2= 300;
    let x1= 0;
    let x2;
    let colorcito = '#afa';

    texto.value = lineas;

    while(l < lineas){
        let ancho = d.width
        let ancho2 = ancho - 1
        let sp = ancho / lineas;
        y1 = sp * l;
        z1 = sp * l;
        x2= sp * (l + 1);
        q2= sp * (l + 1);
        l++;
        dibujarLineas(colorcito, x1,y1,x2,y2);
        dibujarLineas(colorcito, z1,0,ancho,q2);
        dibujarLineas(colorcito, 1,1,1,ancho);
        dibujarLineas(colorcito, ancho,1,1,1);
        dibujarLineas(colorcito, ancho2,ancho2,ancho2,1);
        dibujarLineas(colorcito, 1,ancho2,ancho2,ancho2);
        dibujarLineas(colorcito, 0,0,ancho2,ancho2);
    }

}

