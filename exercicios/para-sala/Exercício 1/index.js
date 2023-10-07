class Employee {
    id;
    nome;
    salary;

    constructor(id, nome, salary) {
        this.id = id;
        this.nome = nome;
        this.salary = salary;
    }

    raiseSalary(percent) {
        if (percent > 0) {
            this.salary += percent * this.salary / 100
            console.log("Salário alterado! Novo valor: " + this.salary)
        }
    }
}

const pessoa1 = new Employee("1", "Zé", 1000)
pessoa1.raiseSalary(1.0)
console.log(pessoa1)

