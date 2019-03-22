class Pakiman {
    constructor(n, life, attack) {
        this.name = n;
        this.life = life;
        this.attack = attack;
        this.img = new Image();
        this.img.src = images[this.name];
    }
    talk(){
        alert(this.name);
    }
    show(){
        document.body.appendChild(this.img);
        document.write(`<p class="pakiman"><strong>${this.name}</strong><br>Vida: ${this.life}<br>ATK: ${this.attack} </p> <hr>`);
    }
}
