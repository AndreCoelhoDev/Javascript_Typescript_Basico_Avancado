class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado.');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado.');
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
console.log(d1);
d1.ligar();
console.log(d1);
d1.ligar();

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }    
};

const s1 = new Smartphone('IPhone', 'Preto');
console.log(s1);
s1.ligar();
console.log(s1);

