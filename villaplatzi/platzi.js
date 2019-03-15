const vp = document.getElementById('villaplatzi');
const papel = vp.getContext('2d');
const teclas = {UP:38,DOWN:40,LEFT:37,RIGHT:39};

//mapa
let fondo = {
    url: 'tile.png',
    cargaOk: true
};
fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener('load', cargarFondo);

//Animales
let vaca = {
    url: 'vaca.png',
    cargaOk: false
};

vaca.image = new Image();
vaca.image.src = vaca.url;
vaca.image.addEventListener('load', cargarVacas);

let cerdo = {
    url: 'cerdo.png',
    cargaOk: false
};
cerdo.image = new Image();
cerdo.image.src = 'cerdo.png';
cerdo.image.addEventListener('load', cargarCerdos);

let pollo = {
    url: 'pollo.png',
    cargaOk: false
};
pollo.image = new Image();
pollo.image.src = 'pollo.png';
pollo.image.addEventListener('load', cargarPollos);

let player = {
  url: 'player.gif',
  cargaOk: false
};
player.image = new Image();
player.image.src = player.url;
player.image.addEventListener('load', cargarPlayer);


//cantidades aleatorias de animales
let cantidadVacas = aleatorio(1, 6);
let cantidadCerdos = aleatorio(1, 6);
let cantidadPollos = aleatorio(1, 6);

//Dibujar fondo y animales
function dibujar() {
    if (fondo.cargaOk == true) {
        papel.drawImage(fondo.image, 0, 0);
    }
    if (vaca.cargaOk == true) {
        console.log('Vacas: ', cantidadVacas);
        for( v = 0; v < cantidadVacas; v++){
            let x = aleatorio(0,20);
            let y = aleatorio(0,20);
            x = x * 20;
            y = y * 20;
            papel.drawImage(vaca.image, x, y);
        }
    }

    if (cerdo.cargaOk == true) {
        console.log('cerdos: ',cantidadCerdos);
        for( c = 0; c < cantidadCerdos; c++){
            let x = aleatorio(0,20);
            let y = aleatorio(0,20);
            x = x * 20;
            y = y * 20;
            papel.drawImage(cerdo.image, x, y);
        }
    }

    if (pollo.cargaOk == true) {
        console.log('Pollos: ',cantidadPollos);
        for( p = 0; p < cantidadPollos; p++){
            let x = aleatorio(0,20);
            let y = aleatorio(0,20);
            x = x * 20;
            y = y * 20;
            papel.drawImage(pollo.image, x, y);
        }
    }
    if (player.cargaOk == true) {
        papel.drawImage(player.image, 100,10);
    }

}

function dibujarPlayer(x,y){

}
document.addEventListener('keyup', dibujarTeclado);
//movimiento personaje
function dibujarTeclado(evento) {

    let movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarPlayer(x);
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

//Carga de elementos en el mapa
function cargarFondo() {
    fondo.cargaOk = true;
    dibujar()
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}
function cargarPlayer() {
    player.cargaOk = true;
    dibujar();
}

//numero Aleatorio
function aleatorio(min, max) {
    let resultado;
    resultado = Math.floor((max - min + 1) * Math.random() + min);
    return resultado;
}
