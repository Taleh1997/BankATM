class BankAccount {
    balance = 0;
    constructor(fullname, password) {
        this.name = fullname;
        this.password = password;
    };

    addBalance() { 
        const value =+inpAdd.value
        this.balance+=value
    };
    withDrawBalance() {
        const value2 =+inpDraw.value
        this.balance-=value2
     };

};

const Bank = new BankAccount("Taleh", 1111);

