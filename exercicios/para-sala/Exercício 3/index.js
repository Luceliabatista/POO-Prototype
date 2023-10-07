class Account {
    id;
    name;
    #balance;

    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    credit(amount) {
        this.#balance += amount
        console.log(`Novo Saldo: ${this.#balance}`)
    }

    debit(amount) {
        this.#balance -= amount
        console.log(`Novo Saldo: ${this.#balance}`)
    }

    transferTo(anotherAccount, amount) {
        if (!anotherAccount) {
            console.log("Conta não informada")
            return
        }
        if (!(anotherAccount instanceof Account)) {
            console.log("Informe uma conta válida")
            return
        }
        if (!anotherAccount.name) {
            console.log("Conta não localizada")
            return
        }

        if (this.#balance < amount) {
            console.log("Saldo insuficiente!")
            return
        } else {
            this.debit(amount)
            anotherAccount.credit(amount)
            console.log(`Novo Saldo de ${this.name}: ${this.#balance}`)
            console.log(`Novo Saldo de ${anotherAccount.name}: ${anotherAccount.#balance}`)
        }
    }
}

const luce = new Account(1, "Luce", 1000)
const ze = new Account(2, "ze", 100)
luce.credit(1000)
luce.debit(100)

ze.credit(100)
ze.debit(10)

luce.transferTo(ze, 200)

console.log(luce)
console.log(ze)