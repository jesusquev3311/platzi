let z;
for (i = 0; i < 10; i++){
    z =aleatorio(10,20);
    document.write(`${z}, `);
}

function aleatorio(min, max){
    let resultado;
    resultado = Math.floor((max - min + 1) * Math.random() + min);
    return resultado;
}
