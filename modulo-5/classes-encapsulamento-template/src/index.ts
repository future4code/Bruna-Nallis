//Ex.1 
// A. Um constructor é usado para definir valores iniciais para atributos de objeto;
// B. A mensagem de chamando o construtor apareceu uma vez;
//C. Para ter acesso as mensagens privadas usamos o metodo "public";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    //private transactions: Transaction[]:a = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getCpf(): string {
        return this.cpf
    };

    public getName(): string {
        return this.name
    };

    public getAge(): number {
        return this.age
    };
};

const user = new UserAccount('25467754886', 'Bruna', 30)
console.log(user)


class Transaction {
    private description: string;
    private value: number;
    private date: string;
    private users: UserAccount[];

    constructor(
        description: string,
        value: number,
        date: string,
        users: UserAccount[]
    ) {
        this.date = date;
        this.value = value;
        this.description = description;
        this.users = users
    };


    public getDescription(): string {
        return this.description
    };

    public getValue(): number {
        return this.value
    };

    public getDate(): string {
        return this.date
    };

    public getUsers(): UserAccount[] {
        return this.users
    };

};

const transactions = new Transaction('banco Labenu', 100, '14/02/2022', UserAccount[])
console.log(transactions);

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getUsers(): UserAccount[] {
        return this.accounts
    };

};