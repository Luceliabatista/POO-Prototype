class Income {
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate) {
        this.balance = initialBalance; this.interestRate = initialInterestRate;
    }

    pritnBalance() {
        console.log(`O Saldo é de R$ ${this.balance},00`);
    }

    calculateIncome() {
        const icome = this.balance * this.interestRate
        this.balance += icome
        console.log(`O Saldo + lucro é de R$ ${this.balance},00. Sendo ${icome},00 de lucro`);
    }
}
const income1 = new Income(1000, 0.05);
income1.pritnBalance();
income1.calculateIncome();