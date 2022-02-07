class Carro {
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    get carroVelocidade(){
        return `Carro: ${this.nome} Velocidade: ${this.velocidade}`;
    };

    acelerar(){
        if(this.velocidade >= 100) return;
        this.velocidade++;
    };

    frenar(){
        if(this.velocidade <= 0) return;
        this.velocidade--;
    };
}

const c1 = new Carro('Fusca');
console.log(c1);

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}
console.log(c1);
console.log(c1.carroVelocidade);
