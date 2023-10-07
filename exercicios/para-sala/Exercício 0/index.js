class Animal {
    #nome;
    raca;
    cor;
    idade;
    qntPata;
    tipo;

    constructor(nome, raca, cor, idade, qntPata, tipo) {
        this.#nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.qntPata = qntPata
        this.tipo = tipo;
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    comer() {
        console.log("nham nham")
    }
    som(tipo) {
        if (tipo == "cão") {
            console.log("Au au")
        } else if (tipo == "gato") {
            console.log("Miiaaaaal")
        }
    }
    dormir() {
        console.log("Zzzzz")
    }
    cagar() {
        console.log("Ploft")
    }
}


const animal1 = new Animal("Zeca", "pincher", "caramelo", "2", "4", "cão")

animal1.cagar()
animal1.dormir()
animal1.comer()
animal1.som("cão")
console.log(animal1)