class Pakiman {
    constructor(n, life, attack) {
        this.name = n;
        this.life = life;
        this.attack = attack;
    }
}

let cauchin = new Pakiman('Cauchin', 100, 30);
let pokacho = new Pakiman('Pokacho', 80, 50);
let tocinauro = new Pakiman('Tocinauro', 120, 40);

console.log(cauchin, pokacho, tocinauro);
