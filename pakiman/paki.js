let images = [];
images['Cauchin'] = 'vaca.png';
images['Pokacho'] = 'pollo.png';
images['Tocinauro'] = 'cerdo.png';

let pakidex = [];
pakidex.push(new Pakiman('Cauchin', 100, 30));
pakidex.push(new Pakiman('Pokacho', 80, 50));
pakidex.push(new Pakiman('Tocinauro', 120, 40));

for( let pakiman of pakidex){
   document.write('<div class="pakiman-wrap">');
   pakiman.show();
    document.write('</div>');
}
